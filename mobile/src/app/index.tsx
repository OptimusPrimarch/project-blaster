import { useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import {
  BarcodeScanningResult,
  BarcodeType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";

// Retail product barcodes plus QR codes.
const BARCODE_TYPES: BarcodeType[] = ["upc_a", "upc_e", "ean13", "ean8", "qr"];

type Scan = { type: string; data: string };

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scan, setScan] = useState<Scan | null>(null);

  // Permission status is still loading.
  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.message}>
          Project Blaster needs the camera to scan barcodes.
        </Text>
        {permission.canAskAgain ? (
          <Button label="Allow camera" onPress={requestPermission} />
        ) : (
          <Button label="Open settings" onPress={() => Linking.openSettings()} />
        )}
      </View>
    );
  }

  const handleScan = ({ type, data }: BarcodeScanningResult) => {
    setScan({ type, data });
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: BARCODE_TYPES }}
        // Stop listening once we have a result so one barcode fires once.
        onBarcodeScanned={scan ? undefined : handleScan}
      />
      <View style={styles.panel}>
        {scan ? (
          <>
            <Text style={styles.label}>{scan.type.toUpperCase()}</Text>
            <Text style={styles.code} selectable>
              {scan.data}
            </Text>
            <Button label="Scan again" onPress={() => setScan(null)} />
          </>
        ) : (
          <Text style={styles.message}>Point the camera at a barcode</Text>
        )}
      </View>
    </View>
  );
}

function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  panel: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 48,
    padding: 20,
    gap: 8,
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  message: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    color: "#8ab4f8",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1,
  },
  code: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    fontVariant: ["tabular-nums"],
  },
  button: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    backgroundColor: "#208AEF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

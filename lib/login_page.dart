diff --git a/lib/main.dart b/lib/main.dart
new file mode 100644
index 0000000000000000000000000000000000000000..aae175eebdb3230c7f24ed689c404d271335e8da
--- /dev/null
+++ b/lib/main.dart
@@ -0,0 +1,19 @@
+import 'package:flutter/material.dart';
+import 'login_page.dart';
+
+void main() {
+  runApp(const LoginApp());
+}
+
+class LoginApp extends StatelessWidget {
+  const LoginApp({super.key});
+
+  @override
+  Widget build(BuildContext context) {
+    return MaterialApp(
+      title: 'Login',
+      theme: ThemeData(useMaterial3: true),
+      home: const LoginPage(),
+    );
+  }
+}

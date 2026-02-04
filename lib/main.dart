diff --git a/lib/login_page.dart b/lib/login_page.dart
new file mode 100644
index 0000000000000000000000000000000000000000..41133587ea4db8f7e4ad396de9a297da81aa1090
--- /dev/null
+++ b/lib/login_page.dart
@@ -0,0 +1,125 @@
+import 'package:flutter/material.dart';
+
+class LoginPage extends StatefulWidget {
+  const LoginPage({super.key});
+
+  @override
+  State<LoginPage> createState() => _LoginPageState();
+}
+
+class _LoginPageState extends State<LoginPage> {
+  final _formKey = GlobalKey<FormState>();
+  final _emailController = TextEditingController();
+  final _passwordController = TextEditingController();
+  bool _obscurePassword = true;
+
+  @override
+  void dispose() {
+    _emailController.dispose();
+    _passwordController.dispose();
+    super.dispose();
+  }
+
+  void _submit() {
+    if (!_formKey.currentState!.validate()) {
+      return;
+    }
+
+    ScaffoldMessenger.of(context).showSnackBar(
+      const SnackBar(content: Text('Logging in...')),
+    );
+  }
+
+  @override
+  Widget build(BuildContext context) {
+    return Scaffold(
+      appBar: AppBar(
+        title: const Text('Login'),
+      ),
+      body: SafeArea(
+        child: Padding(
+          padding: const EdgeInsets.all(16),
+          child: Form(
+            key: _formKey,
+            child: Column(
+              crossAxisAlignment: CrossAxisAlignment.stretch,
+              children: [
+                Text(
+                  'Welcome back',
+                  style: Theme.of(context).textTheme.headlineSmall,
+                ),
+                const SizedBox(height: 8),
+                Text(
+                  'Please sign in to continue.',
+                  style: Theme.of(context).textTheme.bodyMedium,
+                ),
+                const SizedBox(height: 24),
+                TextFormField(
+                  controller: _emailController,
+                  keyboardType: TextInputType.emailAddress,
+                  textInputAction: TextInputAction.next,
+                  decoration: const InputDecoration(
+                    labelText: 'Email',
+                    hintText: 'you@example.com',
+                    prefixIcon: Icon(Icons.email_outlined),
+                    border: OutlineInputBorder(),
+                  ),
+                  validator: (value) {
+                    if (value == null || value.trim().isEmpty) {
+                      return 'Please enter your email';
+                    }
+                    if (!value.contains('@')) {
+                      return 'Enter a valid email address';
+                    }
+                    return null;
+                  },
+                ),
+                const SizedBox(height: 16),
+                TextFormField(
+                  controller: _passwordController,
+                  obscureText: _obscurePassword,
+                  textInputAction: TextInputAction.done,
+                  decoration: InputDecoration(
+                    labelText: 'Password',
+                    prefixIcon: const Icon(Icons.lock_outline),
+                    border: const OutlineInputBorder(),
+                    suffixIcon: IconButton(
+                      icon: Icon(
+                        _obscurePassword ? Icons.visibility : Icons.visibility_off,
+                      ),
+                      onPressed: () {
+                        setState(() {
+                          _obscurePassword = !_obscurePassword;
+                        });
+                      },
+                    ),
+                  ),
+                  validator: (value) {
+                    if (value == null || value.isEmpty) {
+                      return 'Please enter your password';
+                    }
+                    if (value.length < 6) {
+                      return 'Password must be at least 6 characters';
+                    }
+                    return null;
+                  },
+                  onFieldSubmitted: (_) => _submit(),
+                ),
+                const SizedBox(height: 24),
+                ElevatedButton(
+                  onPressed: _submit,
+                  child: const Text('Login'),
+                ),
+                const SizedBox(height: 12),
+                TextButton(
+                  onPressed: () {},
+                  child: const Text('Forgot password?'),
+                ),
+              ],
+            ),
+          ),
+        ),
+      ),
+    );
+  }
+}

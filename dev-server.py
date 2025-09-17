#!/usr/bin/env python3
"""
Local development server with Cross-Origin Isolation headers for SharedArrayBuffer support.
This fixes the Pyodide SharedArrayBuffer warnings.
"""

import socketserver
from http.server import SimpleHTTPRequestHandler
import sys
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def end_headers(self):
        # Required headers for SharedArrayBuffer/Pyodide
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        
        # Additional security headers
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        
        # Cache control
        if self.path.endswith(('.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg')):
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        
        super().end_headers()

    def log_message(self, format, *args):
        # Custom log format to show headers are being applied
        if args[1] == '200':
            print(f"✅ {args[0]} - {format % args} (CORS headers applied)")
        else:
            super().log_message(format, *args)

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    
    # Change to the directory where the script is located
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", port), CORSRequestHandler) as httpd:
        print(f"🚀 Development server running at http://localhost:{port}")
        print("📡 Cross-Origin Isolation headers enabled for SharedArrayBuffer support")
        print("🔧 Headers: Cross-Origin-Embedder-Policy: require-corp")
        print("🔧 Headers: Cross-Origin-Opener-Policy: same-origin")
        print("🛑 Press Ctrl+C to stop the server")
        print("-" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")
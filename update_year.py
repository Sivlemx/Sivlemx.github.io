import glob

html_files = glob.glob('/Users/javivv/Documents/Personal_Web/*.html') + glob.glob('/Users/javivv/Documents/Personal_Web/en/*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update copyright year
    content = content.replace('© 2025', '© 2026')
    content = content.replace('©2025', '©2026')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Actualizado a 2026 en todos los archivos HTML.")

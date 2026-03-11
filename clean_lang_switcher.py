import os
import glob
import re

html_files = glob.glob('/Users/javivv/Documents/Personal_Web/*.html') + glob.glob('/Users/javivv/Documents/Personal_Web/en/*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the exact patterns for the pipes in the lang-switcher
    content = content.replace('<strong>ES</strong> | <a', '<strong>ES</strong><a')
    content = content.replace('</a> | <strong>EN</strong>', '</a><strong>EN</strong>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Pipes removed from lang-switcher in all HTML files.")

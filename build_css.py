import re
import os

def minify_css(input_path, output_path):
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            css = f.read()

        # Remove comments
        css = re.sub(r'/\*[\s\S]*?\*/', '', css)
        
        # Remove whitespace around symbols
        css = re.sub(r'\s*([:;{}])\s*', r'\1', css)
        
        # Remove semicolons before closing braces
        css = re.sub(r';}', '}', css)
        
        # Collapse remaining whitespace
        css = re.sub(r'\s+', ' ', css)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(css.strip())
            
        original_size = os.path.getsize(input_path)
        new_size = os.path.getsize(output_path)
        print(f"CSS Minified: {original_size} -> {new_size} bytes ({(1 - new_size/original_size)*100:.1f}% reduction)")
        
    except Exception as e:
        print(f"Error minifying CSS: {e}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    input_css = os.path.join(base_dir, 'styles.css')
    output_css = os.path.join(base_dir, 'styles.min.css')
    minify_css(input_css, output_css)

# AI Images Needed - Quick Reference

## Images to Generate and Place in `/public/img/`

### 1. Hero Section - Premium Lifestyle Images (4 images)
**Priority: HIGH**

- `hero-baby-sleeping-1.jpg` - Calm baby sleeping peacefully, premium lifestyle photography
- `hero-baby-sleeping-2.jpg` - Peaceful baby in modern nursery, premium lifestyle
- `hero-mom-baby-bonding.jpg` - Mother and baby bonding, calm and peaceful
- `hero-baby-tranquil.jpg` - Baby lying peacefully, premium editorial style

**AI Prompts:**
1. "Calm baby sleeping peacefully, premium lifestyle photography, soft natural lighting, modern minimalist background, editorial style, high-end baby product aesthetic, peaceful and serene atmosphere"
2. "Peaceful baby in modern nursery, premium lifestyle image, clean white background, editorial photography style, calm and tranquil"
3. "Mother and baby bonding moment, premium lifestyle photography, calm and peaceful atmosphere, modern aesthetic, soft lighting"
4. "Baby lying peacefully on soft surface, premium editorial photography, clean modern aesthetic, calm and serene"

**Specs:** 1200x1600px (3:4), JPG/WebP, premium quality

---

### 2. Technology Section - 360° Heating Infographic
**Priority: HIGH**

- `infographic-360-heating.jpg` - Visual showing front + back heating zones

**AI Prompt:**
"Medical illustration of baby showing 360 degree heating zones, front abdominal heat zone highlighted in warm color (orange/red), back lumbar heat zone highlighted in different warm color (yellow/orange), clean technical diagram style, professional medical illustration, modern and premium design, educational but visually appealing"

**Specs:** 1920x1080px or 1200x1200px, JPG/WebP

---

### 3. Revelation Section - Plexo Sacral Anatomical Graphic
**Priority: HIGH**

- `anatomical-plexo-sacral.jpg` - Anatomical illustration highlighting Plexo Sacral

**AI Prompt:**
"Medical anatomical illustration of baby's lower back showing sacral plexus location highlighted in color, clean medical diagram, professional illustration style, educational but premium, modern design, showing nerve network in lumbar region"

**Specs:** 1200x1200px or 16:9, JPG/WebP

---

### 4. Comparison Section - Visual Comparison
**Priority: MEDIUM**

- `comparison-visual.jpg` - Side-by-side comparison of traditional vs Neuro Dual Tech

**AI Prompt:**
"Split screen comparison diagram: left side showing baby with only front heating zone highlighted in warm color (incomplete 50%), right side showing baby with both front and back heating zones highlighted in warm colors (complete 100%), clean technical illustration style, modern design, clear visual differentiation"

**Specs:** 1920x1080px, JPG/WebP

---

### 5. Traditional Heating Section - Limitation Visual
**Priority: MEDIUM**

- `limitation-front-only.jpg` - Visual showing front-only heating limitation

**AI Prompt:**
"Simple diagram showing baby with only front abdominal heating zone highlighted in warm color, incomplete heating visualization, clean technical illustration, showing limitation, modern design"

**Specs:** 1200x800px (3:2), JPG/WebP

---

## Fallback System

All components have fallback systems in place:
- Hero images fall back to existing `baby-side.jpg`, `baby-with-belt.jpg`, `mom-with-belt.jpg`
- Technology section falls back to icon-based diagram
- Other sections hide the image if not available

## Testing

After generating images:
1. Place all images in `/public/img/` directory
2. Test each section to ensure images load correctly
3. Verify fallbacks work if images are missing
4. Check image quality and sizing

## Notes

- All images should match the premium, clean, editorial, science-led aesthetic
- Use soft, calm, professional color tones
- Avoid overly bright or childish colors
- Maintain consistency in style across all images

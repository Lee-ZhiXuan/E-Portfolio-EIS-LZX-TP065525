# How to Add More Projects

## Adding a New Project to Your Portfolio

### Step 1: Prepare Your Content

Before editing the HTML, have ready:
- Project title
- Project dates (start and end dates or duration)
- Project type/course name
- Project description
- 3-5 key achievements
- Technologies/tools used (for the tech tags)
- A good project image (800x600px recommended)

### Step 2: Add Your Project Image

1. Save your project image to the `images/` folder
2. Name it descriptively, e.g., `project-machine-learning.jpg`
3. Remember this filename for the next step

### Step 3: Edit projects.html

Open `projects.html` in a text editor and find the template project card:

```html
<!-- Template Project Card (for reference) -->
<div class="project-card">
    <div class="project-image">
        <img src="images/placeholder.jpg" alt="Project Template">
    </div>
    <div class="project-content">
        <!-- ... content here ... -->
    </div>
</div>
```

### Step 4: Create Your Project Card

Copy and paste the entire project card template and modify it with your content:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-image.jpg" alt="Your Project Title">
    </div>
    <div class="project-content">
        <div class="project-header">
            <h2>Your Project Title Here</h2>
            <span class="project-period">Month Year - Month Year</span>
        </div>
        <p class="project-type">Course Name or Project Type</p>
        <div class="project-description">
            <h3>Objective</h3>
            <p>What was the goal of this project? Write 2-3 sentences explaining the main objective.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Achievement or feature 1</li>
                <li>Achievement or feature 2</li>
                <li>Achievement or feature 3</li>
                <li>Achievement or feature 4</li>
            </ul>

            <h3>Technologies & Tools</h3>
            <div class="tech-tags">
                <span class="tag">Technology 1</span>
                <span class="tag">Technology 2</span>
                <span class="tag">Tool 1</span>
                <span class="tag">Skill 1</span>
            </div>
        </div>
    </div>
</div>
```

### Step 5: Fill in Your Details

Replace the placeholder text with your actual project information:

| Placeholder | Replace With | Example |
|---|---|---|
| `your-image.jpg` | Your image filename | `project-iot.jpg` |
| `Your Project Title Here` | Actual project title | `IoT Home Automation System` |
| `Month Year - Month Year` | Project dates | `Sep 2024 - Dec 2024` |
| `Course Name or Project Type` | Type of project | `Capstone Project` |
| Achievement bullets | Your key accomplishments | `Designed and implemented real-time data processing` |
| Technology 1, 2, etc. | Tools and technologies | `Python`, `Arduino`, `MQTT` |

### Step 6: Position Your Project Card

**Important**: The projects automatically alternate left-right layout. If you're adding projects:
- Odd-numbered cards appear left
- Even-numbered cards appear right

To maintain good visual flow:
- Add your new project card **before** the template card (if it's marked as template)
- Or remove the template card and add your new ones

### Step 7: Test Your Changes

1. Save your `projects.html` file
2. Run your local server: `python -m http.server 8000`
3. Navigate to http://localhost:8000/projects.html
4. Verify:
   - Image loads correctly
   - Text is formatted properly
   - Layout looks good on mobile (resize browser)
   - Navigation still works

---

## Example: Adding a Second CMOS Project

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project-analog.jpg" alt="Analog Circuit Design">
    </div>
    <div class="project-content">
        <div class="project-header">
            <h2>Analog Circuit Design and Optimization</h2>
            <span class="project-period">Aug 2024 - Dec 2024</span>
        </div>
        <p class="project-type">Advanced Analog Design Course</p>
        <div class="project-description">
            <h3>Objective</h3>
            <p>Design and optimize analog amplifier circuits for low-noise applications, achieving high gain with minimal power consumption.</p>
            
            <h3>Key Achievements</h3>
            <ul>
                <li>Designed two-stage op-amp with 60dB gain and 10MHz bandwidth</li>
                <li>Optimized biasing for low-noise performance</li>
                <li>Performed Monte Carlo simulations for process variation analysis</li>
                <li>Achieved 95% design specifications in silicon</li>
            </ul>

            <h3>Technologies & Tools</h3>
            <div class="tech-tags">
                <span class="tag">Cadence Virtuoso</span>
                <span class="tag">Op-Amp Design</span>
                <span class="tag">SPICE Simulation</span>
                <span class="tag">Analog Circuit</span>
                <span class="tag">Layout Design</span>
            </div>
        </div>
    </div>
</div>
```

---

## Tips for Great Project Cards

✅ **Be Specific**: Use numbers and metrics (60dB gain, 10MHz bandwidth)  
✅ **Use Action Words**: "Designed", "Implemented", "Optimized", "Analyzed"  
✅ **Include Technologies**: List 4-5 relevant tools and skills  
✅ **Add Good Images**: A well-chosen image makes huge difference  
✅ **Keep It Concise**: 2-3 sentences for objective, 4-5 bullet points for achievements  
✅ **Mobile Responsive**: Test on phone to ensure readability  

---

## Removing the Template Card

When you're ready, delete this entire section from `projects.html`:

```html
<!-- Template Project Card (for reference) -->
<div class="project-card template">
    <!-- ... remove this entire block ... -->
</div>
```

---

## Need to Update Existing Projects?

Simply find the project card you want to edit and update the text directly. The structure stays the same, only content changes.

---

**Questions?** Check the README.md or test your changes locally before deploying!

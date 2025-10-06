# Haricharan's Terminal Portfolio 🖥️

A Linux terminal-themed personal portfolio website featuring your cybersecurity expertise, professional experience, and projects.

## 🚀 Features

### Terminal Interface
- **Authentic Linux terminal look and feel**
- **Interactive command-line interface**
- **Command history navigation** (arrow keys)
- **Tab autocomplete** for commands
- **Easter eggs** for fun commands

### Theme Support
- **Dark Mode** (default) - Classic terminal green-on-black
- **Light Mode** - Modern light theme
- **Theme persistence** - Saves your preference in localStorage
- **Smooth transitions** between themes

### Available Commands

Type these commands in the terminal or click the menu buttons:

- `help` - Display all available commands
- `about` - Learn more about you
- `skills` - View technical skills
- `experience` - Professional experience
- `projects` - Featured projects
- `education` - Educational background
- `achievements` - Certifications and achievements
- `contact` - Get contact information
- `clear` - Clear the terminal
- `resume` - Links to resume/profiles

### Easter Eggs 🥚

Try these fun commands:
- `whoami` - Who are you?
- `pwd` - Present working directory
- `ls` - List files
- `sudo` - Try to get root access
- `hack` - Hacking simulation
- `matrix` - Enter the Matrix
- `coffee` - Get some coffee
- `echo` - Hello World!

## 📁 File Structure

```
my_site/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling (with theme variables)
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎨 Customization

### Colors (Edit `styles.css`)

Dark theme colors are in `:root`:
```css
--bg-primary: #0d1117;
--text-primary: #00ff00;
--accent-color: #58a6ff;
```

Light theme colors are in `body.light-mode`:
```css
--bg-primary: #ffffff;
--text-primary: #0969da;
--accent-color: #0969da;
```

### Adding New Commands (Edit `script.js`)

Add new commands to the `commands` object:

```javascript
const commands = {
    yourcommand: {
        description: 'Command description',
        output: `
            <div class="section-title">Title</div>
            <div class="section-content">
                <p>Your content here</p>
            </div>
        `
    }
};
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name/`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `my_site` folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click

### Option 4: Local Testing
Simply open `index.html` in any web browser!

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling with CSS Variables
- **Vanilla JavaScript** - No frameworks, pure JS
- **Font Awesome** - Icons
- **Google Fonts** - Fira Code & Share Tech Mono

## 📝 Content Highlights

All content is populated from your resume:

### Personal Information
- ✅ Name: Haricharan Sethuseetharaman
- ✅ Email: sharicharan1729@gmail.com
- ✅ Phone: +1 (412) 636-8162
- ✅ LinkedIn: linkedin.com/in/haricharans
- ✅ GitHub: github.com/haricharan12

### Experience
- ✅ Ernst & Young India - Consultant (July 2022 - July 2024)
- ✅ Ernst & Young India - Cyber Security Intern (Jan 2022 - July 2022)
- ✅ Mphasis Ltd. - Cyber Security Intern (May 2021 - Aug 2021)
- ✅ Next Labs - AI/ML Intern (Nov 2020 - Dec 2020)

### Education
- ✅ Carnegie Mellon University - MS Information Security (2024-2025)
- ✅ Vellore Institute of Technology - B.Tech ECE (2018-2022)

### Projects
- ✅ Automated Social Engineering Setup
- ✅ NetSpector - Network Traffic Analysis
- ✅ Cloud Network Security Platform
- ✅ AI-Driven Financial Trend Discovery
- ✅ Traffic Flow Prediction System

### Skills & Certifications
- ✅ All technical skills listed
- ✅ CRTP, AZ-500, AZ-900 certifications
- ✅ PPP CTF team membership
- ✅ CMU scholarship

## 🎯 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 📄 License

This is your personal portfolio. Feel free to modify and use as needed!

## 🤝 Tips

1. **Keep it updated** - Regularly update your experience and projects
2. **Test all links** - Make sure LinkedIn, GitHub, email links work
3. **Add your resume** - Upload your PDF resume and link it in the `resume` command
4. **Customize colors** - Make it your own by changing the color scheme
5. **Share it** - Add the link to your LinkedIn, GitHub, and email signature!

---

**Built with ❤️ for Haricharan Sethuseetharaman**

*A terminal-themed portfolio showcasing cybersecurity expertise*

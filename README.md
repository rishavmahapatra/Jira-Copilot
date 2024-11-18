# Jira Co-Pilot

An intelligent web application designed to assist Agile teams by automating Agile workflows and reducing manual workload in estimating Jira stories using the story's summary and description using OpenAI ChatGPT. Additionally, it provides functionality to create and update subtasks directly on the Jira board, streamlining project management and enhancing productivity.

## 🚀 Explore the App

🌐 **Webapp Link:** [Click Here to Access the Jira Copilot](https://jira-copilot.vercel.app)

## Features

**Jira API Integration:** Authenticate using your Jira credentials and connect directly to your Jira projects.

**Story-Based Automation**: Input a Jira story ID to automatically generate:
- **Editable sub-tasks for the story.**
- **Time estimates tailored for each sub-task.**

**GenAI Story Estimation**: Estimate the effort required for Jira stories based on the summary and description automatically fetched based on story-id.

**Editable Sub-Tasks:** Customize the AI-generated sub-tasks and estimates to fit your team’s needs.

**Direct Jira Updates:** Push the generated or edited sub-tasks and estimates directly to Jira, ensuring seamless synchronization with your team’s workflow.

## Getting Started

### Prerequisites
To run this application, ensure you have the following:

-Node.js (v14 or later)
-A Jira account with API access and keys

### Installation

1. **Clone the repository**:

   ```bash
    git clone https://github.com/yourusername/Jira-Copilot.git
    cd Jira-Copilot
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
  npm run dev
   ```

4. **Access the application in your browser**:

   ```bash
   http://localhost:3000
   ```
## Usage

1. **Authenticate with Jira:**
Enter your Jira credentials (URL, username, and API token) to connect the application to your project.

2. **Input Story ID:**
Provide the story ID for the task you want to break down.

3. **Show Prompt:**
Check the prompt which is used to generate sub-tasks and estimates leveraging Gen-AI.

4. **Generate Sub-Tasks:**
The application will automatically create sub-tasks and time estimates based on the story details.

5. **Edit Tasks:**
Review and customize the generated sub-tasks and time estimates as needed.

6. **Save and Submit:**
Submit the final tasks to reflect directly in the Jira board.

## Technologies Used
- **Frontend**: React.js, Next.js
- **AI Model**: OpenAI ChatGPT
- **Styling**: Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any improvements or features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

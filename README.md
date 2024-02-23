# SaSoftClean

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Collaboration Guide for sa-soft-clean Project

Welcome to the `sa-soft-clean` project! This guide will help you set up your development environment, collaborate efficiently, and handle merge conflicts.

## Setting Up Your Environment

1. **Clone the Repository**

   Start by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/mbjallow6/sa-soft-clean.git
   cd sa-soft-clean

2. **Install Dependencies**

    Inside the project directory, install the required dependencies:
   
   ```bash
    npm install

3. **Working on Features**
    Create a Feature Branch
        Always create a new branch for each feature or bug fix:
    
    ```bash
    git checkout -b feature/your-feature-name

    Please replace `your-feature-name` with a short descriptive name /for your feature.

4. **Implement Your Feature**

    Write code and commit your changes using clear, descriptive commit messages:
    
    ```bash
    git add .
    git commit -m "Implement feature XYZ"

5. **Stay Up-to-Date with `main`**
    Regularly pull in changes from the `main` branch to minimize merge conflicts:
    
    ```bash
    git pull origin main

6. **Push Feature Branch**
    Once your feature is complete and tested, push your branch to GitHub:

    ```bash
    git push -u origin feature/your-feature-name


## Creating Pull Requests

1. **Open a Pull Request (PR)**
    Go to the repository on GitHub and click on "Compare & pull request" next to your branch.

2. **Review and Merge**
    Have another team member review your code. If everything checks out, merge the PR into `main`.


## Handling Merge Conflicts
    In case of a merge conflict, follow these steps:

1. **Identify Conflicts**
    When you encounter a conflict after pulling from `main`, you'll see a message like:

    ```bash
    Auto-merging file.js
    CONFLICT (content): Merge conflict in file.js
    Automatic merge failed; fix conflicts and then commit the result.

2. **Resolve Conflicts**

    Open the files with conflicts and look for the `<<<<<<<, =======, and >>>>>>>` markers. Resolve the conflicts by editing the files to remove these markers and make sure the code reflects the intended changes.

3. **Add and Commit Resolved Files**
    After resolving the conflicts, add and commit the files:

    ```bash
    git add .
    git commit -m "Resolved merge conflict by integrating feature XYZ"

4. **Push Resolved Changes**

    Push the resolved changes to your feature branch:
    
    ```bash
    git push origin feature/your-feature-name

5. **Finalize the Pull Request**

    If the PR was already open, update it with the resolved conflicts. If not, you can now open the PR.


## Best Practices
   - Do not push directly to main. Always use PRs to merge changes.
   - Keep commits small and focused to make them easier to review and manage.
   - Pull from main frequently to reduce the risk of conflicts.
   - Communicate with the team. If you're working on something that might overlap with another developer's work, coordinate to avoid conflicts.
   - Test your code before opening a PR to ensure it's ready for review.







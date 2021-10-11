# Node.js Microservices

- Installing Docker Desktop
    - https://www.dockier.io
- Make Sure that the Machine has following
    - Hardware Virtulization
    - On Windows Use the Hyper-V
    - Install Docker Desktop
        - Windows 10+ (Except Home)
        - MacOS
- Create a Docker Id
    - https://hub.docker.com
        - Required to PUSH and PULL Images for Microservices Creation


# Working with Docker on Dev Machine
    - The Docker Commands MUST be Known
    - Use Command Prompt or Powershell or Git Bash on Windows
    - Use Terminal or Git BAsh on Mac or Linux

# Docker Commands
    - Login using Docker Id
        - Used to PUSH and PULL images to and from the Repository (https://hub.docker.com)
        - docker login
            - Login 
        - docker logout
            - Logging out
    - Listing all Images locally available
        - docker images
    - Listing all Containers those are running as well as not running
        - Container: It contains image with OS, Runtime and Application
            - Running Conteiner means its has image inside it and this is utilizing Processor, Memory and Network services
            - Stopped Container means it has image but currently now resources are allocated
        - docker ps
    - List all containers those are running
        - docker ps -a
# Container and Image Management
    - Create Docker Image
        - docker build . -t [IMAGE-NAME]:[TAG]
            - Make sure that this command runs from path that contains 'dockerfile' 
            - The 'dockerfile' is a file that contains image creation configurations as follows
                - BASE IMAGE To be Pulled from repository to create current image
                - The Source Code Path
                - Target Folder where the Sourec Code Executable will be copied
                - Commands to Copy Source Code to Target Folder on the image
                - Command to install dependencies in the Image
                - PORT to be exposed from the image
                - Command to run  the application inside the image
            - THe '.' the path from whihc the dockerfile will be loaded, read and validated
            - -t is a switch to define an image name always in lower case and the tag. The tag is like version to identity an image in the local machine as well as in the repository
    - Run the Image commands
        - docker run -p [PORT-OF-THE-LOCAL-MACHINE]:[PORT-EXPOSED-BY-CONTAINER] [IMAGE-NAME]:[TAG] --name=[CONTAINER-NAME]
            - The CONTAINER-NAME will be created that will HOST the IMAGE-NAME:TAG in it and Expose the PORT that will be mapped with the local machine port so that app running inside the container will be accessible.      
    - Running an image in background
        - docker run -d -p [[PORT-OF-THE-LOCAL-MACHINE]:[PORT-EXPOSED-BY-CONTAINER] --name=[CONTAINER-NAME] [IMAGE-NAME:TAG]      
# To delete the Container and the Image
    - Stop the container
        - docker stop [CONTAINER-NAME | CONTAINER-ID]
            - Unload the Resources allocated to container by the Docker Engine
    - Remove the Container
        - docker rm [CONTAINER-NAME | CONTAINER-ID]
    - Remove the Image
        - docker rmi [IMAGE-NAME:TAG | IMAGE-ID]
# For the Production an image MUST be pushed to repository
    - Docker Hub, https://hub.docker.com
    - Azure Container Registery aka ACR
    - Elastic Container Registery aka ECR

    - To Push an image to Remote  Registry
        - First Log in
            - docker login
        - Tag the Local Image if it is not already tagged
            - docker tag [IMAGE-NAME] [IMAGE-NAME:TAG]
        - Tag this image with the UserName of DOcker HUB or ECR or ACR Registery Name
            - e.g. if the Docker HUB user name is 'myuser' then tag the image as myuser
                - docker tag [IMAGE-NAME:TAG] myuser/[IMAGE-NAME:TAG]
        - Push this newly tagged image to the repository
            - docker push   myuser/[IMAGE-NAME:TAG]
    - Pull an image from the repository 
        - Login on Repository
            - docker login
        - Pull the image
            - docker pull [IMAGE-NAME:TAG]                                 

# Running multiple Docker Images as a Provate Cloud on the Local Machine
    - The 'docker-compose.yml'
        - Define each service (image) with its docker file
        - Define an interdependency across services
        - Runt the Comand to Build all Images, Establish Networking across them and run them
            - docker-componse up
                - run this command from the pathe where docker-compose.yml is available
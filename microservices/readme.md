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

# Programming with Microservices
1. MUST create a REST API
2. The Project MUST contain the 'dockerfile' and '.dockerignore' file
    - The '.dockerignore' file will contains all those file paths which are not copied into the image. e.g. node_modules
    - The 'dockerfile' will contain all configurations for creating image and configuring it     
3. Making image ready for the production
    - Login on the repository
    - PUSH the image on the repository
        - Docker HUB
        - Azure Container Registry aka ACR
        - Elastic COntainer Registery a ECR
    -  Tag image to Registery Name (ACR and ECR) or  using usernamer if DOcker HUB
        - docker tag serv1:0.0.1 mast007/serv1:0.0.1
    - PUSH the image repository

# Challanges while working with Microservices (NOT FOR DEVELOPERS)
1. How to deploy and run Multiple Microservices?
    - On-Premises (Private Cloud Equivalent)
        - Use 'docker-compose' tool to run multiple Microservices
            - It is a service that runs over the Docker Engine and used to manage multiple container and networking amongts it
                - create a 'docker-compose.yml' file
                    - configure all services, dependencies across services, ports, ect
                    - The 'docker-compose up', run this command from the path wher docker-compose.yml is present
                        - Load dockerfiles, validate files, build image, create container, expose port and make microservices ready for communication
                        - Also allocate Process, Memory and networking for the containers
                    - The 'docker-compose down' will release all    
            - VERY IMP***
                - The docker-compose.yml must be always available at the root of the multiple microservices project            

        - Kubernetes
            - The Cluster Management service provided by Google (USed by google from last 18-20 years)
            - This is technology that provides multi-containerization for the Microservices
        - Floviours of Kubernetes
            - minikube
            - microk8s (Popular amongst the orgnizations for small apps)        
    - On-Cloud
        - Azure Kubernetes Service (AKS)
        - ELastic Kubernetes Service (EKS) on AWS
        - Google Kubernetes Service (GKS)
2. How to Manage the data persistence for the Microservices?
    - Either use Image for Database (Not-Recommended for Production)
    - Establish networking between Container and the on-premises database
    - Access the database from the cloud (Recommended)
   - The Microservices are Stateless in nature
    - To store the data use
        - Offline Messaging STorages e.g. Rabbit MQ (Recommended), Amazon MQ, other messaging apps e.g. Simple Queing Service (SQS on AWS), Azure Service Bus (ASB)
        - USe Cache (Not const effective, the cost will be more) 
    - The Communication across Microservices is recommended using
        - Messaging, RabbitMQ, Amazon MQ, SQS, etc. 
3. How to create a single Application Gateway for the Microservices? (Very Important)
    - Create an App gateway using code
        - For Node+Express App we have express-gateway
            - npm install -g express-gateway
                - This will provide a 'eg' cli for creating gate project and the configuration
            - The express-gateway provide scaling to the Microservices created using Node.js+Express using simple comfiguration
            - No separate complex coding is required      
            - Comamnd to create a gateway project is
                - eg gateway create
                    - the 'config' folder contains teh gateway configuration wherr we have set all the Microservices paths    
                        - The config file name is
                            - gateway.config.yml
            - The express-gateway needs the 'babel' for node.js to run the gateway configurations
                - @babel/core @babel/node @babel/preset-env
                    - install it in the global scope and also in th project scope
                        - npm install -g @babel/core @babel/node
                        - npm install --save @babel/core @babel/node @babel/preset-env      
            - the 'gateway.config.yml'
                - apiEndpoints
                      - the URL Paths aka endpoint paths to access the actual Microservice e.g. /api/emps
                - serviceEndpoints
                    - Thjis contains  http address for the actual microservices
                - policies
                    - Rules for communication across services e.g. cors, oauth, etc.
                - pipelines
                    - the request routing 
                        - The request us accepted by the Gateway service
                        - Form the Request URL the path (apiEnpoint) will be read
                        - The routing will take place to actual Microservice address (serviceEndpoints)


    - Use the Host-Environment Gateway
        - Kubernetes provides ingress 
        - Microk8s provide ingress, istio
        - EKS provides API Gate3way Management (Recommended but check the COST
4. How tyo manage the Security?
    - Use JWT
    - Cloud security Providers
5. How to deal with failure recovery?    
    - Provided by Kubernetes


# Using Kubernetes

1. Its a Open Source Cluster Manager  for Microservices Based Apps
    - Node: A VM that contains the Microservice Apps using PODs
        - Manage All Pods
        - COntarol Replicas of all Pods using Kubernetes Controllers
    - POD: a Logic Unit of Containers
        - Manage all COntainers and Load Balancing between them
        - Takes an internal IP Address from Node and configure it to each COntainer
        - This internal IP (CLUSTER IP) will be used for communication across containers
        - Each Container provides an Internal Port for communications
            - The POD configures a public port to communicate to the Microservice from client. This public port is provided by the Node to POD 
        - The Public IP (EXTERNAL IP) is assigned by Kubernetes so that the request from outside is accepted
            - Client ---> Uses Public IP to Call the Service 
                - http://[PUBLIC-ADDRESS]:[PUBLIC-PORT]/[URL-PATH]
            - The Node target to the POD using kubernetes apiserver and map the request to the Private IP and  private port of the container inside the pod
            - The COntainer Accepts the request and process it and generate the response     
        - If the Container is down, the request is routed to the Container replica either in same of different POD internally using the Kubernetes Cluster Service    
    - Container: Its is Host for Image
    - Image: A Microservice Executable
2. Important Kubernetes Commands
    - To Get list of nodes
        - kubectl get nodes
    - get list of pods
        - kubectl get pods
            - This commn will list all pods with their names
            - the status of the POD must be running
    - get description of a specific pod
        - You need this if any service is not working as per the expectations
            - kubectl describe pod [POD-NAME]     
    - get list of all microservices currently deployeed
        - kubectl get services    OR kubectl get svc
        - List all services and watch changes e.g. wait for an external ip to be allocated to the service
            - kubectl get svc -w      
    - Creating POD using configuration aka deployment.yml or deployment.yaml, any file name can be allowed
        - kubectl apply -f [DEPLOYMENT].yml
            - Define POD NAme with its selector, this is used by Kunernetes
            - Define Replicas (optional) default value is 1
            - Define Specifications
                - Define COntainer
                    - name
                    - image to put in container
                    - resources
                        - limits CPU
                        - Memory
                    - PORT, the port that is defined in docker file
    - define the service    
        - service.yaml or service.yml [ANY-FILE-NAME].yml
            - metadata lable
                - the service name
            - specifications
                - port
                    - External port
                - targetPort: the port exposed by container
                - selector
                    - The POD that host the service
                - type
                    - LoadBalancer, used to allow public access to the service
                    - ClusterIP
                        - the internal service, but the ingress or any other gateway is mandotory to configure to access these services         
    - apply deployment
           - This will create POD, create a container and fetch image in it
           - allocate CPU and Memory
           - Expose the PORT
        - kubectl apply -f deployment.yml
    - apply service
            - activate the service for public access
                - Assing external IP and PORT
        - kubectl apply -f service.yml

    - To remove service and deployment
        - First Delete the service
            - kubectl delete -f service.yml
        - Delete the deployment
            - kubectl delete -f deployment.yml         
VERY IMP ****
    - a single file can be created for deployment and service






# Assignments

# Date: 12-10-2021
- Create 3 images for perfoming CRUD operations on the MySQL RDS with 3 different tables
    - Run these images first individually
    - Run these images at a time using docker-compose up 
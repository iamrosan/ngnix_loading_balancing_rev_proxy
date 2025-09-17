# Node.js + Docker + Nginx Load Balancing with SSL  

## 📌 Introduction  
This project demonstrates how to deploy a simple **Node.js web application** in a **Dockerized environment** with multiple instances running simultaneously. These instances are load-balanced using **Nginx**, and traffic is secured with **SSL/TLS certificates**.  

The Node.js application serves a static HTML page that calls a public API for demonstration. To make the setup production-ready, Nginx acts as a reverse proxy and load balancer.  

---

## 🐳 Docker & Application Setup  
- Built a **Node.js web server** inside a Docker container.  
- Used **Docker Compose** to create **three instances** of the web server (running on ports 3001, 3002, 3003).  
- Each container is tagged with a different application name (for easy identification).  

This allows horizontal scaling of the application — multiple containers handle requests in parallel.  

---

## 🌐 Nginx as Reverse Proxy & Load Balancer  
Nginx plays a central role in this project:  

- **Reverse Proxy**: Directs incoming client requests to one of the backend Node.js containers.  
- **Load Balancing**: Uses the `least_conn` strategy to route requests to the container with the fewest active connections.  
- **SSL/TLS Encryption**: Configured with self-signed certificates to enable HTTPS.  
- **HTTP → HTTPS Redirect**: Any request coming through port 80 (HTTP) is automatically redirected to port 443 (HTTPS).  

### Why Nginx?  
- Handles large numbers of concurrent requests efficiently.  
- Provides security by terminating SSL/TLS at the proxy.  
- Offers flexibility with multiple load balancing strategies.  
- Easily integrates with Dockerized microservices.  

---

## 🔒 SSL/TLS Setup  
- Created a **self-signed SSL certificate** using OpenSSL.  
- Configured Nginx to serve HTTPS traffic on port 443.  
- HTTP traffic (port 80) is redirected to HTTPS for secure communication.  

In production, tools like **Certbot with Let’s Encrypt** can be used to generate free, trusted certificates.  

---

## 🚀 Deployment on AWS EC2  

- Clone the repository from GitHub onto your EC2 instance.  
- Build and start the Docker containers using Docker Compose.  
- Verify all Node.js containers are running.  
- Install and configure Nginx on the EC2 instance.  
- Add your custom Nginx configuration file with upstream Node.js servers and SSL certificates.  
- Reload Nginx to apply configuration.  
- Generate SSL certificates (self-signed or via Certbot for production).  

---

## ⚡ Workflow Summary  
<img width="288" height="467" alt="image" src="https://github.com/user-attachments/assets/0048c5cb-2235-47e7-8344-eddfdc665e60" />

1. Client sends a request to the **EC2 public DNS or domain**.  
2. Nginx receives the request on port **443 (HTTPS)**.  
3. Nginx forwards the request to one of the **Node.js containers** (3001, 3002, 3003).  
4. Node.js processes the request and responds back through Nginx.  
5. Nginx returns the response securely to the client.  

---

## ✅ Key Takeaways  
- **Docker** makes the application portable and scalable.  
- **Nginx** provides reliability, load balancing, and SSL security.  
- **SSL/TLS** ensures encrypted communication.  
- This architecture can be easily extended for production with **Route 53 DNS** + **Certbot** for real SSL certificates.  

# Use an official Conda image as a parent image
FROM continuumio/miniconda3

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create a Conda environment and install dependencies
RUN conda create -n myenv python=3.9 && \
    conda init bash

# Activate the environment
SHELL ["conda", "run", "-n", "myenv", "/bin/bash", "-c"]

# Install CUDA and cuDNN
RUN conda install -n myenv -c anaconda cudatoolkit=11.0 && \
    conda install -n myenv -c anaconda cudnn

# Set working directory
WORKDIR /app

# Copy and install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copy Python script and model
COPY ./predict.py ./
COPY ./model/model.h5 ./model/

# Copy Node.js application files
COPY package*.json ./
RUN npm install
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["conda", "run", "-n", "myenv", "node", "server.js"]

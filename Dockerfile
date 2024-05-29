FROM artifactory.wma.chs.usgs.gov/docker-official-mirror/debian:stable

LABEL maintainer="gw-w_vizlab@usgs.gov"

# Run updates and install curl
RUN apt-get update && \
      apt-get upgrade -y && \
      apt-get install curl -y && \
      apt-get purge -y --auto-remove && \
      apt-get clean

# Enable the NodeSource repository and install nodejs version 20 (current LTS as of May 2024)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
      apt-get install -y nodejs

# Create temp directory for building viz app
RUN mkdir -p /tmp/delaware-basin-story

# Copy source code
WORKDIR /tmp/delaware-basin-story
COPY . .
# Set environment variables for build target and tile source and then run config.sh
# to insert the correct S3 tile source URLs in the Mapbox configuration file.
ARG BUILDTARGET="test"
ARG VUE_BUILD_MODE="development"
ENV E_BUILDTARGET=$BUILDTARGET
ENV E_VUE_BUILD_MODE=$VUE_BUILD_MODE

# Build the Vue app.
RUN npm install
RUN chmod +x ./build.sh && ./build.sh


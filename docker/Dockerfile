FROM openjdk:17-jdk-alpine
COPY build/libs/demo.jar /app/demo.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/demo.jar"]
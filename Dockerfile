FROM openjdk:17

LABEL maintainer="Mirko"

ADD backend/target/CheatSheet.jar CheatSheet.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /CheatSheet.jar"]
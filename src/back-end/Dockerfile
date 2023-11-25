FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app 
#
# copy csproj and restore as distinct layers
ARG AI_HOST
ARG AI_KEY
ARG KEYCLOACK_REALM
ARG KEYCLOACK_AUTH_SERVER
ARG KEYCLOACK_AUTHORITY
ARG KEYCLOACK_SSL_REQUIRED
ARG KEYCLOACK_RESOURCE
ARG KEYCLOACK_VERIFY_TOKEN_AUDIENCE
ARG KEYCLOACK_CREDENTIALS_SECRET
ARG KEYCLOACK_CONFIDENTIAL_PORT
ARG KEYCLOACK_RESPONSE_TYPE

COPY *.sln .
COPY back-zipchat/*.csproj ./back-zipchat/
COPY Domain/*.csproj ./Domain/
COPY Repository/*.csproj ./Repository/
COPY Testes/*.csproj ./Testes/ 
COPY zipchat-test/*.csproj ./zipchat-test/ 
#
WORKDIR /app/back-zipchat 
RUN dotnet restore 
#
WORKDIR /app 
# copy everything else and build app
COPY back-zipchat/. ./back-zipchat/
COPY Domain/. ./Domain/
COPY Repository/. ./Repository/ 
#
WORKDIR /app/back-zipchat
RUN dotnet publish -c Debug -o out 
# ==============================================================================
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /app 
#
COPY --from=build /app/back-zipchat/out ./
ENTRYPOINT ["dotnet", "back-zipchat.dll"]
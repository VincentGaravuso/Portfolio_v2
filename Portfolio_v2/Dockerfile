FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Portfolio_v2/Portfolio_v2.csproj", "Portfolio_v2/"]
COPY ["Portfolio_API/Portfolio_API.csproj", "Portfolio_API/"]
RUN dotnet restore "Portfolio_v2/Portfolio_v2.csproj"
COPY . .
WORKDIR "/src/Portfolio_v2"
RUN dotnet build "Portfolio_v2.csproj" -c Release -o /app/build

FROM build AS publish
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash \
    && apt-get install nodejs -yq
RUN dotnet publish "Portfolio_v2.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Portfolio_v2.dll"]

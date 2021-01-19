  
FROM appsvc/node
ENV AzureWebJobsScriptRoot=/home/site/wwwroot
COPY . /home/site/wwwroot

RUN cd /home/site/wwwroot && ls
RUN cd /home/site/wwwroot && npm install
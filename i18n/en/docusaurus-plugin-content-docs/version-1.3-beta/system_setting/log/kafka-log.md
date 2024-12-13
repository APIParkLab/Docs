---
canonicalUrl: https://docs.apipark.com/docs/next/system_setting/log/kafka-log
---



# Kafka Log

Collect the log information from the request gateway and output it to `Kafka`, making it convenient for users to perform secondary operations, such as log analysis.

## Features

Enables the output of log content generated during the program's operation to a specified Kafka cluster queue.

## Operation Demonstration

### Create a New Kafka Log Configuration

1. Click `Operations and Integration` -> `Kafka Log`, and then click `Add Kafka Log`.

![](images/2024-10-27/d72cd60d6aa0cc7dd50abdae4cb249d32958647bdb3ec9247ab7a59a001ae8c9.png)  


2. Fill in the Kafka log configuration, and click save after completing.

![](images/2024-10-27/af7b625f886ecb0976abff3844bee6382dc1094e9b2d909c1c1597a52743c086.png)  


**Configuration Description**:

<table><thead><tr><th width="208">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>Version</td><td>Kafka version</td></tr><tr><td>Server Address</td><td>Kafka service address, multiple addresses separated by commas</td></tr><tr><td>Topic</td><td>Kafka service Topic information</td></tr><tr><td>Partition Type</td><td>Method of choosing partition, default is hash. When choosing hash, if partition_key is empty, random selection is used</td></tr><tr><td>Partition</td><td>When Partition Type is manual, this specifies the partition number</td></tr><tr><td>Partition Key</td><td>When Partition Type is hash, this specifies the hash value</td></tr><tr><td>Request Timeout</td><td>Timeout duration, in seconds</td></tr><tr><td>Output Format</td><td>The format of output log content, supports single-line, JSON format output</td></tr><tr><td>Formatting Configuration</td><td>Output format template, for configuration tutorial <a href="https://help.apinto.com/docs/formatter">click here</a> to jump</td></tr></tbody></table>

**Example Formatting Configuration**

```json
{
   "fields": [
      "$time_iso8601",
      "$request_id",
      "@request",
      "@proxy",
      "@response",
      "@status_code",
      "@time"
   ],
   "request": [
      "$request_method",
      "$scheme",
      "$request_uri",
      "$host",
      "$header",
      "$remote_addr"
   ],
   "proxy": [
      "$proxy_method",
      "$proxy_scheme",
      "$proxy_uri",
      "$proxy_host",
      "$proxy_header",
      "$proxy_addr"
   ],
   "response": [
      "$response_headers"
   ],
   "status_code": [
      "$status",
      "$proxy_status"
   ],
   "time": [
      "$request_time",
      "$response_time"
   ]
}
```


### Go Live

1. Click the `Go Live` button beside the configuration to be launched.

![](images/2024-10-27/c845bf600f1fbe39e778397a87b20abe3c05f525fb154d80efbe17ea36a0e7cf.png)  

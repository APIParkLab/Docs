---
canonicalUrl: https://docs.apipark.com/docs/next/system_setting/log/file-log
---



# File Logging

Collect log information from the request gateway and output it to a file for developers to query.

## Features

File Logging: Outputs request information to a log file with the following features:

* Customize the storage directory and file name
* Split log files periodically to avoid a single file becoming too large and difficult to view
* Delete expired files regularly to reduce hard disk space usage

## Operation Demonstration

### Create a New File Log Configuration

1. Click `System Settings` -> `Logs` -> `File Log`, then click `Add File Log`.
![](images/2024-10-27/6e7b1882deeaa54d04707f7b6837a86918b368c297b5d35f634ef87c52dc4072.png)  


2. Fill in the file log configuration.

![](images/2024-10-27/a509fb623955445b04e898b407ea5f99ce152fc44661c6ecaeb7c2d57b3ffe0b.png)  


**Configuration Description**:

| Field Name      | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| File Name       | The name of the file to be stored; the actual stored name will have a `.log` suffix, i.e., \{File Name\}.log |
| Storage Directory | The directory where the file is stored, supports both relative and absolute paths |
| Log Splitting Period | Creates a new log file periodically, and renames old log files; options: Hourly, Daily |
| Expiration Time | File retention time in days; files exceeding this time will be regularly deleted |
| Output Format   | The format of the log content, supports single line or JSON formatted output |
| Formatting Configuration | Template for output format. For tutorial [click here](https://help.apinto.com/docs/formatter) to jump |

**File Lifecycle Demonstration**

![img](http://data.eolinker.com/course/tgLQMA27ce951803c9e4c6ab3c82a899863c86f86624e01.png)

**Formatting Configuration Example**

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

After completing the configuration, click `Submit`.

### Launch

1. Click the `Launch` button next to the configuration you wish to launch.

![](images/2024-10-27/05a9a722c4dd14850c93058f6f8d0afa08b6f43b49e0f7bb0cf08c307962f792.png)  
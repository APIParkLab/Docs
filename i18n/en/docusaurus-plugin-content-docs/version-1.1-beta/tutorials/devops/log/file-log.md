# File Logging

Collect and output log information from the request gateway into files for developers to review.

## Features

File Logging: Outputs request information to log files with the following features:

* Customize the directory and file name for storage
* Split log files periodically to avoid large files that are hard to view
* Scheduled deletion of expired files to reduce hard drive space usage

## Operation Demonstration

### Create a New File Log Configuration

1. Click `System Settings` -> `Operations and Integration` -> `Logs` -> `File Logs` on the left navigation bar, then click `Add File Log`.

![](images/2024-08-14/e3179cdf3f75ff815697f271fd21cebe598b5c1a473be9668acd35c15b27cfca.png)  

2. Fill in the File Log Configuration

![](images/2024-08-14/1e89c4f712e14377b15a86680c90626f590e9a3dca1cf74d71f106303249788c.png)  

**Configuration Explanation**:

| Field Name   | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| File Name    | The stored file name, the actual stored name will have a `.log` suffix, i.e., \{File Name\}.log |
| Storage Directory | The directory where files are stored, supports relative and absolute paths |
| Log Splitting Cycle | Create new log files periodically, old log files will be renamed, options: Hour, Day |
| Expiry Time  | File retention time, in days, files exceeding this will be deleted periodically |
| Output Format | Format of output log content, supports Line, Json format    |
| Formatting Configuration | Template for output format, tutorial [click here](https://help.apinto.com/docs/formatter) to navigate |

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
      "$response_header"
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

After filling it out, click `Submit`.

### Go Live

1. Click the `Go Live` button next to the configuration you want to launch.

![](images/2024-08-14/09046b548e25f27fa9be3a11bb4202273229146304828187ecc9136213af96b8.png)  

### Access the Interface and Print Log Output

> **Prerequisites:**
>
> 1. You have completed the service subscription process, and the service provider has approved the subscription request. If not, refer to the tutorial [Subscribe to Service](../../../quick/suberscriber/subscribe.md).

Access the subscribed interface. Here we demonstrate using Apikit's testing feature.

![img](http://data.eolinker.com/course/l2sHmd3600aeebb248a48629498f4a0ab9e2529ac1e3587.png)

After access, enter the node directory and check the access log output information, as shown below

![img](http://data.eolinker.com/course/d5ryFin9e200c902beea742b311944041249ce19732bb28.png)
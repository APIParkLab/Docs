---
canonicalUrl: https://docs.apipark.com/docs/next/system_setting/log/syslog-log
---



# Syslog Logs

## Introduction

Collect log information from the request gateway and output it to `Syslog`.

## Features

Logs generated during program execution can be output to a remote Syslog server.

* Supports various request protocols, including TCP, UDP, UNIX.
* Supports setting Syslog output log levels.
* Supports different log output format types.
* Supports custom log formatting configurations.

## Operation Demonstration

### Create a New Syslog Log Configuration

1. Click `Operations & Integration` -> `Syslog Logs`, then click `Add Syslog Log`.

![](images/2024-10-27/755dad8523be5e49b0be9acac376c98e303be6f1a6f100b136162c9683e58914.png)  

2. Fill in the Syslog log configuration, and after completion, click `Confirm`.

![](images/2024-10-27/a890d8d7ebca8747b4936c8c31fd2273163bdde3c797aea0c8d2adb4f0a307e9.png)  

**Configuration Instructions**:

| Field Name   | Description                                               |
| ------------ | --------------------------------------------------------- |
| Network Protocol | Protocol for requesting Syslog service, supports TCP, UDP, UNIX |
| Server Address | Syslog service address                                   |
| Log Level   | Syslog output log level, supports ERROR, WARN, INFO, DEBUG, TRACE |
| Output Format | Log content format for output, supports single line, JSON format |
| Formatting Configuration | Template for the output format, tutorial [click here](https://help.apinto.com/docs/formatter) for more information |

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

### Release

1. Click the `Release` button next to the configuration to be released.

![](images/2024-10-27/fd2998c0454c5cf51054b52d228bc4bc1ffc25e9aa65d1f82f9edc972e31fe78.png)  
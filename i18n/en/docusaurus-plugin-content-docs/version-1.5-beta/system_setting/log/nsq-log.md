# NSQ Logs

## Introduction

Collect log information from the request gateway and output it to `NSQ`, making it convenient for users to perform secondary operations such as log analysis.

## Features

Ability to output log content generated during program execution to a specified `NSQ` Topic.

* Supports configuring multiple `NSQD` request addresses
* Supports different log output format types
* Supports custom log formatting configuration

## Operation Demonstration

### Create NSQ Log Configuration

1. Click on `Operations & Integration` -> `NSQ Logs`, then click `Add NSQ Log`.

![](images/2024-10-27/936703be2a7022424dadd0c2547848da320ea888223dbae357f56ed6243525e5.png)  

2. Fill in the NSQ log configuration and click `Confirm` after completion.

![](images/2024-10-27/39ac43d5308e20cf1ebc0a2374e63ffd72803d39de8e43fad99ddfd3a171b435.png)  

**Configuration Description**:

| Field Name   | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| NSQD Address List | The list of addresses where NSQD provides TCP services, supporting multiple addresses |
| Topic        | Information about the NSQD Topic                               |
| Authentication Secret | Key information for NSQD access authentication       |
| Output Format| Supported output log content formats, such as single-line and JSON format |
| Formatting Configuration | Output format template, configuration tutorial available [here](https://help.apinto.com/docs/formatter) |

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

### Deployment

1. Click the `Deploy` button next to the configuration you wish to deploy.

![](images/2024-10-27/d0ed6a8ef56b7303297b97630d0ad2a99d11f834b9764660e6fb613fecd118c6.png)  

---
canonicalUrl: https://docs.apipark.com/docs/next/system_setting/log/README
---



# Log Configuration

In APIPark, the log configuration feature allows users to output log data from the system's operational processes to various storage and processing systems. Logs are a means to expose the internal state of a system, and good logs can help developers quickly locate issues and find suitable ways to resolve them. By configuring log output, centralized management and analysis of logs can be achieved, thereby enhancing system maintainability and troubleshooting efficiency.

## **Supported Log Output Destinations**

**File**:

* Logs can be configured to output to local or remote file systems for easy subsequent viewing and backup.
* This method is suitable for scenarios where simple storage and viewing of logs are needed, making it easy to implement and manage.

**HTTP Server**:

* Logs can be sent to a specified HTTP server via HTTP protocol for real-time reception and processing.
* This method is suitable for scenarios requiring real-time monitoring and processing of logs, such as sending logs to a log analysis service via an HTTP interface.

**Syslog Server**:

* Logs can be sent to a Syslog server, using the Syslog protocol for centralized log management and analysis.
* This method is suitable for enterprise-level systems, especially in Linux/Unix environments, and can integrate with existing log management infrastructure.

**Kafka**:

* Logs can be sent to a Kafka message queue for high-throughput log collection and stream processing.
* This method is suitable for large-scale distributed systems requiring real-time log analysis and processing.

**NSQD**:

* Logs can be sent to NSQD (a distributed real-time messaging platform) for high-performance log transmission and processing.
* This method is suitable for low-latency, high-availability log processing scenarios, especially in microservice architectures.

## **Advantages**

**Flexibility**:

* Supports multiple log output destinations, allowing users to choose the most suitable log storage and processing method based on specific needs.

**Centralized Management**:

* By outputting logs to a centralized management system, unified management and analysis of log data can be achieved, improving operational efficiency.

**Real-Time Monitoring**:

* Supports real-time log output to systems like HTTP servers and Kafka, facilitating real-time monitoring and quick system issue response.

**Scalability**:

* Supports distributed log processing systems (such as Kafka, NSQD) that handle large-scale log data, meeting high concurrency and high throughput demands.

**Easy Integration**:

* Supports standardized log protocols (such as Syslog, HTTP), enabling seamless integration with existing log management and analysis tools.
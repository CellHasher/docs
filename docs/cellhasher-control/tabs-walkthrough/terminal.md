---
description: >-
  The Terminal tab lets you execute commands directly on your connected devices
  — either through ADB or Fastboot, depending on what mode the devices are
  currently in.
---

# Terminal

<figure><img src="/img/control-tabs/terminal/overview.png" alt="" /><figcaption><p>The ADB Terminal view showing multi-device command execution with categorized command index on the right.</p></figcaption></figure>

### ADB & Fastboot Modes

You can toggle between **ADB** and **Fastboot** modes using the top buttons. This flexibility allows you to manage devices in normal Android operation or while flashing firmware.

:::tip
Know your mode — ADB is for in-system operations, Fastboot is for low-level firmware tasks.
:::

### ADB Command Index

On the right side panel, you’ll find the **ADB Command Index**, a categorized list of helpful commands.\
You can expand sections such as:

* System
* CPU & Memory
* Battery
* Storage & Disk
* Network & Connectivity

You can add your own custom commands or sections for quick reuse, or import them directly from the Index Page.

<div><img src="/img/control-tabs/terminal/command-index-collapsed.png" alt="" width="276" /> <img src="/img/control-tabs/terminal/command-index-expanded.png" alt="" width="407" /></div>

### Running Commands

* Run a command on a **single device** by selecting it from the dropdown.
* Run a command on **all devices** by toggling the _Single Device_ button (it will switch to “All Devices”).

Results appear live in the console, color-coded by device ID for clarity.

:::warning
The Terminal is powerful — don’t run commands blindly. Always research unfamiliar ADB or Fastboot commands before execution. Some system-level operations can soft-brick or wipe devices if used incorrectly.
:::

### Logging & Export

Use the **Export TXT** button to save terminal output logs for analysis, troubleshooting, or documentation.\
This makes it easy to keep records of operations across multiple devices.

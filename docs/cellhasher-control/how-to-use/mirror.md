# Mirror

## Toolbar Functions:

* Back Arrow: Return to Devices Screen
* Eye Icon: Quick view all devices
* Optimizer: Run a performance optimization on selected devices
* Mining Toggle: Start/Stop mining on selected devices (change mining function in settings)
* Mirror: Start screen mirroring on selected devices (When troubleshooting, inspect [No Audio](../tabs-walkthrough/network.md) settings)
* Refresh: Update device list and connection status
* Screen Sleep: Turn off displays while keeping devices awake on selected devices
* Settings: Access configuration screen

## Device List:

* Tag: Customize device names
* Mirror: Immediately start individual device mirroring
* Select: Add device to selection group

## Action Dropdowns:

* Battery Temperature Control
  * Submit custom temperature
  * Reset: Set to real temperature
    * Leave as-is unless the device issues a battery temp warning. Otherwise set to 20°C.
* Battery Level Management
  * Submit: custom battery level
  * Reset: Set to real battery level
    * Use this feature to set the battery to 1-100% to avoid the phone interpreting the lack of battery as 0%, therefore shutting itself off repeatedly.  
* Wi-Fi Configuration
  * Set SSID (network name) and password
* Package/APK Management
  * Install APK files using Browse and Install
  * Custom Hard Remove feature for debloating
    * By default, Cellhasher provides a custom list of popular packages for Hard Remove. Edit what is included in Hard Remove in Settings. See below:
* Script Execution
  * Select Script
    * Execute your own script using Browse and Run Script 
  * Pre-Made Script
    * Select a pre-made script provided by Cellhasher
    * The pre-made scripts can be ran again on the same device if you experience an execution failure.

## Grid Display Area:

* The mirror feature will intiate the selected phones to appear in the grid display. The devices will appear one-at-a-time, and continue to rearrange automatically until all selected devices appear.
* Use the window header's expand feature to show a single device full-screened.

:::note
Known issue: If a device does not appear on the initial mirroring and leaves a gap, select that device's individual mirror button on the side panel.
:::

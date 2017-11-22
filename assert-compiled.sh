#!/bin/sh

PLATFORM="android"
NODE_VERSION="7.1.0"
ARM_RELPATH="compiled/$NODE_VERSION/$PLATFORM/arm/leveldown.node"
ARM64_RELPATH="compiled/$NODE_VERSION/$PLATFORM/arm64/leveldown.node"
ARM_BINDINGS="$(pwd)/$ARM_RELPATH"
ARM64_BINDINGS="$(pwd)/$ARM64_RELPATH"

if [ ! -e "$ARM_BINDINGS" ]; then
  echo "ERROR: Module is missing compiled native bindings file $ARM_RELPATH"
  exit 1
fi

if [ ! -e "$ARM64_BINDINGS" ]; then
  echo "ERROR: Module is missing compiled native bindings file $ARM64_RELPATH"
  exit 1
fi

exit 0
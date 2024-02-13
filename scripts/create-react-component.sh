#!/bin/bash

# Check if component name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <component_name>"
  exit 1
fi

# Extract component name from command line argument
component_name=$1

# Create component directory
mkdir $component_name

# Create component file
touch $component_name/$component_name.js

# Create component stylesheet
touch $component_name/$component_name.css

# Create component test file
touch $component_name/$component_name.test.js

# Create component index file
echo "export { default } from './$component_name';" > $component_name/index.js

# Write component template to component file
cat << EOF > $component_name/$component_name.js
import React from 'react';
import './$component_name.css';

const $component_name = () => {
  return (
    <div className="$component_name">
      {/* Your component content here */}
    </div>
  );
}

export default $component_name;
EOF

# Output success message
echo "Component '$component_name' created successfully."

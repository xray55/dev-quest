const SNAPSHOT_DATA = {
  "tree": {
    "Cybersecurity Ops": {
      "2": {
        "title": "M1: Module 1: Foundations of Cybersecurity Operations",
        "lessons": [
          {
            "id": 2,
            "title": "Introduction to Module 1: Foundations of Cybersecurity Operations"
          },
          {
            "id": 6,
            "title": "CIA Triad in Cybersecurity"
          },
          {
            "id": 7,
            "title": "The Role of Firewalls: Analogy to a Home Router"
          }
        ]
      },
      "5": {
        "title": "M2: **  \nCybersecurity Operations: Exploring Key Concepts, Frameworks, and Network Security",
        "lessons": [
          {
            "id": 8,
            "title": "Introduction to Cybersecurity Operations: Exploring Key Concepts, Frameworks, and Network Security"
          },
          {
            "id": 10,
            "title": "Cybersecurity Operations"
          },
          {
            "id": 11,
            "title": "Network Security in Cybersecurity Operations"
          }
        ]
      },
      "7": {
        "title": "M3: Incident Management and Real-Time Monitoring in Cybersecurity",
        "lessons": [
          {
            "id": 14,
            "title": "Introduction to Incident Management and Real-Time Monitoring in Cybersecurity"
          }
        ]
      }
    },
    "DevOps Engineering": {
      "6": {
        "title": "M1: Introduction to DevOps Principles and Practices",
        "lessons": [
          {
            "id": 9,
            "title": "Introduction to DevOps Principles and Practices"
          }
        ]
      }
    },
    "Frontend Master": {
      "8": {
        "title": "M1: Introduction to Frontend Development",
        "lessons": [
          {
            "id": 15,
            "title": "Introduction to Frontend Development"
          }
        ]
      }
    },
    "Malware Analysis": {
      "4": {
        "title": "M1: Module 1: Introduction to Malware Analysis - Key Concepts and Components",
        "lessons": [
          {
            "id": 12,
            "title": "\": \"Core Concept #1 of Module 1: Introduction to Malware Analysis - Key Concepts and Components\",\n  \""
          },
          {
            "id": 13,
            "title": "Malware Analysis: Breaking Down Components"
          },
          {
            "id": 17,
            "title": "Deep Dive into Core Concept #3: Malware Analysis"
          }
        ]
      }
    },
    "Python Full Stack": {
      "3": {
        "title": "M1: Introduction to Python Programming",
        "lessons": [
          {
            "id": 3,
            "title": "Introduction to Introduction to Python Programming"
          },
          {
            "id": 4,
            "title": "Functions in Python Programming"
          },
          {
            "id": 5,
            "title": "Core Concept #3 of Introduction to Python Programming - Functions"
          }
        ]
      }
    },
    "Reverse Engineering": {
      "1": {
        "title": "M1: Reverse Engineering Essentials - Module 1",
        "lessons": [
          {
            "id": 1,
            "title": "Introduction to Reverse Engineering Essentials - Module 1"
          },
          {
            "id": 16,
            "title": "Core Concept #2 of Reverse Engineering Essentials - Module 1"
          }
        ]
      }
    }
  },
  "lessons": {
    "1": {
      "title": "Introduction to Reverse Engineering Essentials - Module 1",
      "analogy": "Just as a mechanic diagnoses a car's issues, reverse engineers analyze software to understand its functionality.",
      "starter_code": "def reverse_engineer(text):\n    return text[::-1]",
      "content": "- Reverse engineering is the process of understanding and analyzing a system or software by examining its components.  \n- It helps in identifying the functions and relationships within the system.  \n- This skill is essential for maintaining and optimizing existing systems.",
      "docs": "https://en.wikipedia.org/wiki/Reverse_engineering  \nhttps://www.tutorialspoint.com/reverse-engineering/",
      "ide_mode": "python"
    },
    "2": {
      "title": "Introduction to Module 1: Foundations of Cybersecurity Operations",
      "analogy": "Cybersecurity operations can be likened to a house with various security systems working together, such as doors, windows, and locks, each playing a role in providing safety, much like components in cybersecurity.",
      "starter_code": "# Example of a simple network with firewall and router\n\nclass Firewall:\n    def __init__(self):\n        self.rules = ['Allow DNS', 'Allow HTTP']\n    \n    def check_traffic(self, traffic_type):\n        if traffic_type in self.rules:\n            return \"Allowed\"\n        else:\n            return \"Blocked\"\n\nclass Router:\n    def __init__(self):\n        self.interfaces = ['WAN', 'LAN']\n    \n    def route_packet(self, packet):\n        print(f\"Routed through {self.interfaces[0]} and {self.interfaces[1]}\")\n\n# Example usage\nfirewall = Firewall()\nrouter = Router()\n\nprint(\"Firewall status:\", firewall.check_traffic(\"DNS\"))\nprint(\"Router status:\", router.route_packet(\"Sample Packet\"))",
      "content": "- Cybersecurity operations involve the monitoring and management of network security components.\n- The CIA triad (Confidentiality, Integrity, Availability) is fundamental to understanding cybersecurity goals.\n- Network layers in the OSI model play a crucial role in determining how data is secured.",
      "docs": "[CIA Triad](https://en.wikipedia.org/wiki/CIA_triangle), [OSI Model](https://www.cisco.com/).",
      "ide_mode": "python"
    },
    "3": {
      "title": "Introduction to Introduction to Python Programming",
      "analogy": "Python can be compared to a toolbox in a carpentry shop. Just as a carpenter uses different tools to build various projects, a programmer uses different functions and libraries in Python to solve problems and create software. Each tool (or function) has its specific purpose, making the process of building something more efficient and organized.",
      "starter_code": "# This program simulates a simple game where the user guesses a number import random def guess_number(): # Generate a random number between 1 and 100 secret_number = random.randint(1, 100) attempts = 0 print(\"Welcome to the Number Guessing Game!\") print(\"I'm thinking of a number between 1 and 100.\") while True: try: # Get user input guess = int(input(\"Enter your guess: \")) attempts += 1 # Check if the guess is correct if guess < secret_number: print(\"Too low! Try again.\") elif guess > secret_number: print(\"Too high! Try again.\") else: print(f\"Congratulations! You guessed the number in {attempts} attempts.\") break except ValueError: print(\"Please enter a valid integer.\") # Run the game guess_number()",
      "content": "Python is a High-Level Language: Python is designed to be easy to read and write, making it accessible for beginners. It abstracts many low-level programming details, allowing developers to focus on problem-solving rather than syntax. Interpreted Language: Unlike compiled languages, Python code is executed line by line by an interpreter. This makes debugging easier and allows for dynamic changes during runtime. Dynamic Typing: In Python, you don't need to declare the type of a variable explicitly. The interpreter automatically determines the type based on the value assigned to it.",
      "docs": "[Python Official Documentation](https://docs.python.org/3/) [Learn Python - Interactive Tutorial](https://www.learnpython.org/)",
      "ide_mode": "python"
    },
    "4": {
      "title": "Functions in Python Programming",
      "analogy": "Imagine you're building a house. Just like how you use different tools (hammer, screwdriver) to perform specific tasks repeatedly, functions in programming are reusable blocks of code that perform specific tasks. Instead of writing the same code multiple times, you define a function once and call it whenever needed.",
      "starter_code": "# Define a simple function to add two numbers\ndef add_numbers(a, b):\n    return a + b\n\n# Call the function with arguments 5 and 3\nresult = add_numbers(5, 3)\nprint(\"The sum is:\", result)  # Output: The sum is: 8",
      "content": "1. **Function Definition**: A function in Python is defined using the `def` keyword followed by the function name and parentheses which may include parameters. The statements that form the body of the function start on the next line and must be indented.\n   \n2. **Return Statement**: Functions can return a value to the caller using the `return` statement. If no return statement is used, the function returns `None`.\n\n3. **Function Parameters**: Parameters allow functions to accept input values when they are called. These parameters act as placeholders for the actual values passed into the function.",
      "docs": "1. [Python Functions Official Documentation](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)\n2. [PEP 8 \u2013 Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/#functions)",
      "ide_mode": "python"
    },
    "5": {
      "title": "Core Concept #3 of Introduction to Python Programming - Functions",
      "analogy": "Imagine you have a set of tools in your kitchen. Each tool has a specific job, like cutting vegetables or mixing ingredients. Similarly, functions in programming are like these tools. They perform specific tasks and can be reused multiple times throughout your code.",
      "starter_code": "# Define a simple function to add two numbers\ndef add_numbers(a, b):\n    \"\"\"\n    This function takes two arguments, a and b, and returns their sum.\n    \n    Args:\n    a (int or float): The first number.\n    b (int or float): The second number.\n    \n    Returns:\n    int or float: The sum of the two numbers.\n    \"\"\"\n    return a + b\n\n# Call the function with example values\nresult = add_numbers(5, 3)\nprint(\"The sum is:\", result)",
      "content": "1. **Function Definition**: A function in Python is defined using the `def` keyword followed by the function name and parentheses which may include parameters. The body of the function starts at the next line and must be indented.\n2. **Docstrings**: Functions can have a special string called a docstring that describes what the function does, its arguments, and its return value. This is useful for documentation and understanding the code.\n3. **Function Calls**: Once a function is defined, it can be called by using its name followed by parentheses containing any required arguments.",
      "docs": "1. [Python Functions Documentation](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)\n2. [PEP 257 \u2013 Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)",
      "ide_mode": "python"
    },
    "6": {
      "title": "CIA Triad in Cybersecurity",
      "analogy": "The CIA triad is like an umbrella that covers three important aspects of data management: availability, confidentiality, and integrity. Just as an umbrella protects you from the rain, these principles protect your data.",
      "starter_code": "# Example of CIA triad concepts in code:\n# Availability: Systems should be accessible.\nprint(\"System is available.\")  # Check if systems are up and running.\n\n# Confidentiality: Data is protected through encryption.\nencrypted_data = \"Encrypted Data\"  # Example of data being encrypted for privacy.\n\n# Integrity: Data accuracy is maintained with checks like checksums.\nchecksum = \"Data validated.\"  # Example of data integrity check.",
      "content": "The CIA triad in cybersecurity stands for Confidentiality, Integrity, and Availability. These principles are fundamental to secure systems.  \n\n- **Availability** ensures that systems and data are accessible when needed. For example, systems should be up and running and responsive.\n\n- **Confidentiality** relates to the protection of data privacy, often achieved through encryption. This means that data is accessible only to those who need it, such as in encrypted form.\n\n- **Integrity** refers to maintaining the accuracy and consistency of data over its lifecycle, which can be ensured through checks like checksums or hashes.",
      "docs": "[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)  \n[ISO/IEC 27001:2013](https://www.iso.org/committee/6697485.html)",
      "ide_mode": "python"
    },
    "7": {
      "title": "The Role of Firewalls: Analogy to a Home Router",
      "analogy": "Just as a home router manages traffic by allowing or blocking devices based on rules, firewalls regulate data flow in networks.",
      "starter_code": "# Example of IPv4 address check\nip = \"192.168.1.1\"",
      "content": "Firewalls function similarly to home routers by managing network traffic. They inspect each data packet, applying predefined rules to determine if it should be allowed or blocked. Firewalls maintain state information to track ongoing conversations and ensure efficient data flow, much like how a router manages devices in a home network.",
      "docs": "[Cisco](https://www.cisco.com) | [NIST](https://www.nist.gov)",
      "ide_mode": "python"
    },
    "8": {
      "title": "Introduction to Cybersecurity Operations: Exploring Key Concepts, Frameworks, and Network Security",
      "analogy": "Cybersecurity can be likened to a castle with various defensive elements like walls (network perimeter), gates (firewalls), guards (IDS), and an inner court (internal network).",
      "starter_code": "The provided Python code demonstrates a simple firewall rule, allowing TCP traffic from 192.168.1.1 to 10.0.0.1 on port 443.",
      "content": "- NIST Cybersecurity Framework: Includes five functions for managing cybersecurity risks.  \n- Zero Trust Model: Emphasizes continuous verification of identity, device, and data context.  \n- Network Security: Involves technologies like firewalls with specific configurations.",
      "docs": "For further reading, explore the provided documentation links on NIST's Cybersecurity Framework and the Zero Trust Model.",
      "ide_mode": "python"
    },
    "9": {
      "title": "Introduction to DevOps Principles and Practices",
      "analogy": "DevOps can be compared to a well-coordinated orchestra where each member (developer, operations team) has a distinct role but works together seamlessly to produce a harmonious performance. Just as an orchestra rehearses and fine-tunes its performance, DevOps emphasizes collaboration between development and operations teams to ensure smooth deployment and maintenance of software.",
      "starter_code": "# Import necessary libraries\nimport time\n\ndef build_code():\n    print(\"Building code...\")\n    time.sleep(1)\n    print(\"Code built successfully.\")\n\ndef test_code():\n    print(\"Testing code...\")\n    time.sleep(1)\n    print(\"All tests passed.\")\n\ndef deploy_code():\n    print(\"Deploying code to production environment...\")\n    time.sleep(1)\n    print(\"Deployment successful.\")\n\n# Main function to simulate CI/CD pipeline\ndef ci_cd_pipeline():\n    build_code()\n    test_code()\n    deploy_code()\n\nif __name__ == \"__main__\":\n    ci_cd_pipeline()",
      "content": "- **Continuous Integration (CI)**: The process of merging all developers' working copies to a shared mainline several times a day.\n- **Continuous Deployment (CD)**: Automated deployment of code changes to production environments, ensuring that every change is automatically and reliably deployed.\n- **Infrastructure as Code (IaC)**: The practice of managing infrastructure through machine-readable configuration files, enabling the creation, modification, and deletion of cloud resources.",
      "docs": "1. [DevOps Handbook](https://devops.com/devops-handbook/)\n2. [Continuous Integration and Continuous Deployment (CI/CD)](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-continuous-deployment)",
      "ide_mode": "python"
    },
    "10": {
      "title": "Cybersecurity Operations",
      "analogy": "Cybersecurity operations are like the immune system of a network, with firewalls acting as defenders, network segmentation organizing traffic efficiently, and encryption safeguarding data.",
      "starter_code": "print(\"Cybersecurity is essential for network protection.\")",
      "content": "Just as our immune system protects our body, cybersecurity concepts ensure the smooth and secure operation of networks. Firewalls are like the first line of defense, network segmentation helps in organizing traffic efficiently, and encryption ensures that data is safeguarded during transmission. These elements work together to provide a robust and organized network environment, much like how different parts of the immune system collaborate to protect the body.",
      "docs": "[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) and [CISCO: Network Security Overview](https://www.cisco.com/cen-us/subject_security/securedigital/network-security.html)",
      "ide_mode": "python"
    },
    "11": {
      "title": "Network Security in Cybersecurity Operations",
      "analogy": "An effective network can be likened to a well-organized city, where each layer represents a different part of the infrastructure.",
      "starter_code": "(\"Network Security in Cybersecurity Operations\")",
      "content": "The OSI model is a seven-layered framework that helps understand how data flows through layers for effective communication. Common protocols like TCP/IP underpin web services with HTTP/HTTPS, while DNS and DHCP manage name resolution and dynamic IP assignment. Key network security components include firewalls, NAT, and VPNs, guided by the NIST Cybersecurity Framework.",
      "docs": "[OSI Model](https://www.cisco.com), [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)",
      "ide_mode": "python"
    },
    "12": {
      "title": "\": \"Core Concept #1 of Module 1: Introduction to Malware Analysis - Key Concepts and Components\",\n  \"",
      "analogy": "\": \"Imagine your computer as a bustling city. Just as a city has different parts like the mayor, transportation systems, and schools, a computer has various components like the operating system, applications, and hardware. Similarly, malware is like unexpected visitors in the city; it can be helpful or sometimes cause issues.\",\n  \"",
      "starter_code": "\": \"# Example of a simple definition in Python\\ndef malware_example():\\n    \\\"\\\"\\\"Malware can be defined as software that can be harmful to a computer.\\\"\\\"\\\"\\n    print(\\\"Malware is essential to understand in computing.\\\")\\n\\nmalware_example()\",\n  \"",
      "content": "\": \"1. **Malware** refers to software components that can be either beneficial or potentially harmful to a computer system.\\\\n2. **Types of Malware**: These include viruses, worms, spyware, adware, and trojan horses, each with specific characteristics.\\\\n3. **Purpose of Analysis**: The main goal is to identify, classify, and understand the behavior of malware to ensure optimal performance of computing systems.\",\n  \"",
      "docs": "\": \"1. [NIST Cybersecurity Glossary](https://www.nist.gov/glossary)\\\\n2. [Cisco Malware Overview](https://www.cisco.com/wcs/fundamental/cisco-jargon-glossary glossaryTermMalware)\"\n}",
      "ide_mode": "python"
    },
    "13": {
      "title": "Malware Analysis: Breaking Down Components",
      "analogy": "Malware analysis is like a medical check-up. Just as a doctor examines symptoms to diagnose a patient, we examine the behavior and characteristics of software components (like files or processes) to identify if they are functioning correctly or if there's an issue (like malware).",
      "starter_code": "def check_even_or_odd(number):\n    if number % 2 == 0:\n        return \"even\"\n    else:\n        return \"odd\"\n\nresult = check_even_or_odd(4)\nprint(result)  # Output: 'even'",
      "content": "1. **Key Concept**: Malware analysis involves breaking down software into its components to examine their behavior and identify any issues.  \n2. **Component Focus**: Each component (e.g., files, processes) is analyzed individually to determine if it meets expected criteria or behaves as intended.  \n3. **Importance of Components**: Just as each part of a system contributes to the whole, each component in malware analysis provides insights into the overall health and functionality of the software.",
      "docs": "- [Wikipedia: Malware](https://en.wikipedia.org/wiki/Malware)  \n- [Official Python Documentation](https://docs.python.org/)",
      "ide_mode": "python"
    },
    "14": {
      "title": "Introduction to Incident Management and Real-Time Monitoring in Cybersecurity",
      "analogy": "Incident management in cybersecurity is like managing traffic in a busy city. Just as traffic lights guide vehicles efficiently, incident management systems guide the flow of information and ensure that security incidents are identified, prioritized, and resolved promptly.",
      "starter_code": "import time\n\n# Simulating real-time data with a loop\nwhile True:\n    print(\"Monitoring cybersecurity metrics...\")\n    time.sleep(1)",
      "content": "- **Timely Identification of Incidents**  \n  - Real-time monitoring systems continuously track and analyze network traffic, logs, and system statuses to detect security events as they occur.  \n  - Example: A firewall detects an intrusion and triggers an alert within seconds.\n\n- **Integration with Other Systems**  \n  - Incident management platforms often integrate with other tools like SIEM (Security Information and Event Management) systems, ticketing systems, and cloud providers for seamless workflows.  \n  - For instance, a security event in a cloud environment is logged, analyzed, and resolved through integrated systems.\n\n- **Scalability in Data Handling**  \n  - Modern incident management systems handle large volumes of data efficiently, ensuring that real-time monitoring remains effective even in complex, multi-cloud environments.  \n  - Example: Logs are generated in terabytes daily, requiring scalable solutions to manage and analyze them promptly.",
      "docs": "1. [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)\n2. [Incident Management in Cybersecurity](https://en.wikipedia.org/wiki/Incident_management)",
      "ide_mode": "python"
    },
    "15": {
      "title": "Introduction to Frontend Development",
      "analogy": "Real World Comparison: Imagine you're building a house. The frontend development is like designing and decorating the interior of the house. You decide on the color scheme, furniture layout, and overall aesthetic that users will interact with. Just as a well-designed interior enhances the user experience in a house, a well-crafted frontend enhances the user experience on a website.",
      "starter_code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>My First Frontend Page</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f9;\n            margin: 0;\n            padding: 20px;\n        }\n        h1 {\n            color: #333;\n        }\n        p {\n            color: #666;\n        }\n    </style>\n</head>\n<body>\n    <h1>Welcome to My Frontend Page</h1>\n    <p>This is a simple example of frontend development using HTML and CSS.</p>\n</body>\n</html>",
      "content": "- **HTML (Hypertext Markup Language)**: HTML provides the structure of web pages. It uses tags to define elements such as headings, paragraphs, links, images, and more.\n- **CSS (Cascading Style Sheets)**: CSS is used to style and layout HTML elements. It controls aspects like colors, fonts, spacing, and positioning.\n- **JavaScript**: JavaScript adds interactivity to web pages. It can manipulate HTML content, respond to user events, and perform complex calculations.",
      "docs": "- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML): Comprehensive guide to HTML.\n- [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp): Detailed tutorials and references for CSS.",
      "ide_mode": "javascript"
    },
    "16": {
      "title": "Core Concept #2 of Reverse Engineering Essentials - Module 1",
      "analogy": "Just as a mechanic takes apart a clock to understand how it works, reverse engineering in software allows us to break down complex systems into their components to better understand and improve them.",
      "starter_code": "def reverse_engineer_example():\n    \"\"\"A simple function demonstrating reverse engineering through decomposition.\"\"\"\n    # Original code: Sum of two numbers\n    a = 10\n    b = 20\n    c = a + b\n    print(f\"The sum is {c}\")\n\n# Running the function\nreverse_engineer_example()",
      "content": "Reverse engineering is the process of breaking down complex systems into their fundamental components to understand their structure and functionality. It allows for better understanding, optimization, and modification of existing systems. This approach is particularly useful in software development when dealing with large or legacy systems that need to be improved or maintained.",
      "docs": "1. [Reverse Engineering in Software Development](https://www.geeksforgeeks.org/reverse-engineering-in-software-engineering/) 2. [Reverse Engineering: Breaking Down to Understand](https://www.tutorialspoint.com/software_engineering/reverse_engineering.htm)",
      "ide_mode": "python"
    },
    "17": {
      "title": "Deep Dive into Core Concept #3: Malware Analysis",
      "analogy": "Malware analysis is like a doctor examining a patient to identify any underlying issues.",
      "starter_code": "import subprocess\nsubprocess.run([\"pefile\", \"-V\"])",
      "content": "- **Key Concepts and Components**:\n  - **PE Structure**: The PE (Portable Executable) file format is crucial as it contains metadata about the file, including its version, timestamp, and other details.\n  - **Malware Types**: Malware can be categorized into various types such as viruses, worms, trojan horses, spyware, adware, etc., each with distinct behaviors.\n  - **Unpacking Techniques**: Unpacking is essential for analyzing files that are compressed or packed. Tools like `pefile` help in examining PE files efficiently.",
      "docs": "- [PE file format](https://en.wikipedia.org/wiki/Portable_Executable)\n- [Malware types](https://www.malware.com/types-of-malware/)",
      "ide_mode": "python"
    }
  }
};
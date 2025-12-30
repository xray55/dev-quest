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
          },
          {
            "id": 22,
            "title": "Core Concept #2 of Incident Management and Real-Time Monitoring in Cybersecurity"
          },
          {
            "id": 28,
            "title": "Real-Time Monitoring in Cybersecurity"
          }
        ]
      },
      "12": {
        "title": "M4: Module 4: Incident Management and Response",
        "lessons": [
          {
            "id": 32,
            "title": "Introduction to Module 4: Incident Management and Response"
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
          },
          {
            "id": 19,
            "title": "Continuous Integration/Continuous Deployment (CI/CD)"
          },
          {
            "id": 23,
            "title": "Continuous Integration (CI) in DevOps Principles and Practices"
          },
          {
            "id": 27,
            "title": "Deep-Dive Lesson on Continuous Deployment (CD)"
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
          },
          {
            "id": 29,
            "title": "Introduction to JavaScript in Frontend Development"
          },
          {
            "id": 30,
            "title": "Introduction to Frontend Development - JavaScript Core Concept #3"
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
      },
      "9": {
        "title": "M2: Malware Analysis Techniques and Dynamic Analysis",
        "lessons": [
          {
            "id": 18,
            "title": "Introduction to Malware Analysis Techniques and Dynamic Analysis"
          },
          {
            "id": 20,
            "title": "Dynamic Analysis in Malware Analysis"
          },
          {
            "id": 26,
            "title": "Dynamic Analysis"
          }
        ]
      },
      "11": {
        "title": "M3: Advanced Malware Analysis: Exploring Malware Dynamics and Behavior",
        "lessons": [
          {
            "id": 33,
            "title": "\": \"Understanding JSON Formatting\",\n  \""
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
          },
          {
            "id": 21,
            "title": "Loops in Introduction to Python Programming"
          },
          {
            "id": 31,
            "title": "Loops with Break and Continue"
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
          },
          {
            "id": 24,
            "title": "Core Concept #3 of Reverse Engineering Essentials - Module 1: Understanding the Role of Reverse Engineering in Enhancing System Performance"
          }
        ]
      },
      "10": {
        "title": "M2: Reverse Engineering Module 2: Unveiling System Fundamentals",
        "lessons": [
          {
            "id": 25,
            "title": "The Layered Structure of Computer Systems"
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
    },
    "18": {
      "title": "Introduction to Malware Analysis Techniques and Dynamic Analysis",
      "analogy": "Static analysis is like taking apart a clock to examine its parts, while dynamic analysis is like listening to the ticking to understand how it works without disassembling it.",
      "starter_code": "def dynamic_analysis(program):\n    for line in program:\n        if line == 'exit':\n            return\n        print(line)\n\nprogram = [\n    \"print('Hello, World!')\",\n    \"exit\"\n]\n\ndynamic_analysis(program)",
      "content": "1. **Static vs. Dynamic Analysis**  \n   - Static analysis examines the code without executing it, helping identify potential issues like syntax errors.\n   - Dynamic analysis evaluates the program during runtime, capturing actual behavior.\n\n2. **Dynamic Analysis Explained**  \n   - It offers a real-time view of how the program behaves as it runs, including variables and function calls.\n\n3. **Advantages of Dynamic Analysis**  \n   - It reveals runtime environments, exceptions, and state changes that static analysis might overlook.",
      "docs": "1. Malware Analysis Techniques: https://www.researchgate.net/publication/276504896_Introduction_to_Malware_Analysis\n2. Dynamic Analysis Definition: https://en.wikipedia.org/wiki/Dynamic_analysis",
      "ide_mode": "python"
    },
    "19": {
      "title": "Continuous Integration/Continuous Deployment (CI/CD)",
      "analogy": "Imagine a construction team building a skyscraper. Instead of waiting until the entire building is completed before testing its stability, they continuously add floors and test each new addition immediately. If any issues are found during these tests, they can be addressed promptly without wasting time on further construction. This ensures that the building remains stable throughout the process.\nSimilarly, in software development, Continuous Integration (CI) involves merging code changes from multiple developers into a shared repository frequently, followed by automated builds and tests to catch integration issues early. Continuous Deployment (CD) takes this a step further by automatically deploying these tested changes to production, ensuring that new features are released quickly and reliably.",
      "starter_code": "import unittest\n\n# Simulated application code\ndef add(a, b):\n    return a + b\n\n# Unit tests\nclass TestAddFunction(unittest.TestCase):\n    def test_add_positive_numbers(self):\n        self.assertEqual(add(1, 2), 3)\n\n    def test_add_negative_numbers(self):\n        self.assertEqual(add(-1, -2), -3)\n\n    def test_add_zero(self):\n        self.assertEqual(add(0, 0), 0)\n\n# Simulated deployment function\ndef deploy():\n    print(\"Deploying to production...\")\n\nif __name__ == \"__main__\":\n    # Run tests\n    unittest.main(argv=[''], exit=False)\n    \n    # If all tests pass, deploy the application\n    if not unittest.TestResult.wasSuccessful():\n        print(\"Deployment skipped due to test failures.\")\n    else:\n        deploy()",
      "content": "- **Automated Testing**: CI/CD pipelines automate the testing process by running tests every time code is committed. This ensures that any integration issues are caught early, reducing the risk of bugs in production.\n  \n- **Frequent Deployments**: By automating deployment, CD allows for frequent and reliable releases of new features and updates. This helps in delivering value to users more quickly and efficiently.\n\n- **Improved Collaboration**: CI/CD encourages collaboration among developers by ensuring that code changes are integrated frequently and tested thoroughly before being merged into the main codebase.",
      "docs": "- [Continuous Integration and Continuous Deployment (CI/CD) - Atlassian](https://www.atlassian.com/devops/continuous-integration/ci-vs-ci-cd)\n- [What is CI/CD? | Microsoft Learn](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/cicd?view=azure-devops)",
      "ide_mode": "python"
    },
    "20": {
      "title": "Dynamic Analysis in Malware Analysis",
      "analogy": "Just as a chef observes how ingredients interact while cooking to create the perfect dish, dynamic analysis allows us to observe how different parts of a program interact and behave as it runs.",
      "starter_code": "def example_function(a): return a + 1 x = 5 print(example_function(x))",
      "content": "Dynamic analysis examines a program as it runs, revealing its behavior and interactions. It helps identify runtime aspects like data flow and control flow. This method is particularly useful for understanding memory usage and function calls.",
      "docs": "1. [Dynamic Analysis](https://en.wikipedia.org/wiki/Dynamic_analysis) 2. [Dynamic Analysis in Malware Analysis](https://www.researchgate.net/publication/308564974_Dynamic_Analysis_of_Malware)  \n\nThis lesson provides a comprehensive understanding of dynamic analysis, emphasizing its importance in malware analysis.",
      "ide_mode": "python"
    },
    "21": {
      "title": "Loops in Introduction to Python Programming",
      "analogy": "Imagine you are organizing your bookshelf. You have a bunch of books that need to be placed in order. A loop is like going through each book one by one, placing them in the correct position until all books are organized. In programming, loops allow us to execute a block of code repeatedly until a certain condition is met.",
      "starter_code": "# Example: Using a for loop to print numbers from 1 to 5\n\nfor i in range(1, 6):\n    print(i)",
      "content": "Loop Constructs: Python supports two primary types of loops: `for` and `while`. The `for` loop is used for iterating over a sequence (like lists, tuples, strings), while the `while` loop continues to execute as long as a specified condition is true. Control Flow Statements: Inside loops, you can use control flow statements like `break` and `continue`. `break` exits the loop entirely, whereas `continue` skips the current iteration and moves on to the next one. Loop with Else Clause: Both `for` and `while` loops can have an optional `else` clause. The `else` block is executed when the loop completes normally (i.e., not terminated by a `break` statement). This feature is useful for scenarios where you need to perform an action only if the loop didn't encounter any issues.",
      "docs": "[Python For Loop Documentation](https://docs.python.org/3/tutorial/controlflow.html#for-loops), [Python While Loop Documentation](https://docs.python.org/3/tutorial/introduction.html#first-steps-towards-programming)",
      "ide_mode": "python"
    },
    "22": {
      "title": "Core Concept #2 of Incident Management and Real-Time Monitoring in Cybersecurity",
      "analogy": "Real-time monitoring in cybersecurity is like the traffic system of the modern world. Just as traffic lights manage the flow of cars, real-time monitoring systems manage the flow of data and ensure smooth information flow across networks.",
      "starter_code": "# Core Concept #2 of Incident Management and Real-Time Monitoring in Cybersecurity",
      "content": "1. **Real-Time Monitoring**  \n   Real-time monitoring is the continuous observation of network traffic, applications, and system performance to detect and respond to events promptly. It ensures that issues are identified as they occur, allowing for immediate attention.  \n\n2. **Automated Alerts**  \n   Automated alerts notify teams of specific incidents or conditions, such as high CPU usage or a security threat. These alerts help in timely resolution by directing the focus to critical areas.  \n\n3. **Incident Prioritization and Collaboration**  \n   Incidents are prioritized based on their impact, severity, or business relevance. Real-time collaboration tools like ServiceNow or PagerDuty enable teams to respond efficiently, with clear communication channels for quick problem-solving.",
      "docs": "1. [Real-Time Monitoring in Cybersecurity](https://www.ibm.com/topics/cybersecurity)  \n2. [Incident Management in IT](https://www.gartner.com/en/docs/glossary/what-is-incident-management)",
      "ide_mode": "python"
    },
    "23": {
      "title": "Continuous Integration (CI) in DevOps Principles and Practices",
      "analogy": "Continuous Integration is like baking a cake with multiple ingredients. Imagine you're making a cake with flour, sugar, eggs, and butter. Instead of mixing all the ingredients at once, you add each ingredient one by one and mix it thoroughly before adding the next. This way, if any ingredient causes an issue (like too much sugar), you can identify and fix it early on without wasting all the other ingredients. Similarly, in software development, Continuous Integration ensures that code changes are integrated frequently and tested automatically to catch issues early.",
      "starter_code": "# Example GitHub Action Workflow for Continuous Integration name: CI Pipeline on: push: branches: - main jobs: build-and-test: runs-on: ubuntu-latest steps: - name: Checkout code uses: actions/checkout@v2 - name: Set up Python uses: actions/setup-python@v2 with: python-version: '3.8' - name: Install dependencies run: | python -m pip install --upgrade pip pip install pytest - name: Run tests run: | pytest",
      "content": "1. **Automated Integration**: Continuous Integration automates the process of integrating code changes from multiple contributors into a shared repository. This ensures that the integrated codebase is always in a deployable state.\n2. **Frequent Merges**: Developers frequently merge their code changes into a central repository, allowing for early detection and resolution of integration issues.\n3. **Automated Testing**: Each code integration triggers automated builds and tests to verify that the new code works correctly with the existing codebase.",
      "docs": "1. [Continuous Integration (CI) on GitHub](https://docs.github.com/en/actions/guides/about-continuous-integration)\n2. [Continuous Integration Best Practices](https://www.atlassian.com/devops/continuous-integration)",
      "ide_mode": "python"
    },
    "24": {
      "title": "Core Concept #3 of Reverse Engineering Essentials - Module 1: Understanding the Role of Reverse Engineering in Enhancing System Performance",
      "analogy": "Imagine you have a complex machine, like a clock. When it works well, everything is fine, but when it stops or runs slow, you open it up to see how it operates. By examining each part, you can identify any issues and make improvements.",
      "starter_code": "def add_two_numbers(a, b):\n    # Step 1: Add the two numbers\n    result = a + b\n    return result\n\n# Example usage:\nprint(add_two_numbers(5, 3))  # Output: 8",
      "content": "Reverse engineering helps in understanding the functionality of a system by examining its components. It allows for identifying and addressing issues within complex systems by breaking them down into their constituent parts. Applying reverse engineering can lead to improvements in system performance and efficiency.",
      "docs": "1. [Wikipedia: Reverse Engineering](https://en.wikipedia.org/wiki/Reverse_engineering)\n2. [Britannica: Reverse Engineering](https://www.britannica.com/topic/reverse-engineering)",
      "ide_mode": "python"
    },
    "25": {
      "title": "The Layered Structure of Computer Systems",
      "analogy": "A well-structured sandwich",
      "starter_code": "programs",
      "content": "The layered structure of a computer system can be likened to a well-structured sandwich, where each layer contributes to the whole. Just as a sandwich has distinct layers like bread, filling, etc., a computer's layers include programs, the operating system, binary code, and hardware, each playing a crucial role in ensuring smooth functionality, security, and efficiency. This structure helps organize and manage functions effectively, explaining how different parts work together smoothly.",
      "docs": "[Example Link 1](https://example.com), [Example Link 2](https://example.com)",
      "ide_mode": "python"
    },
    "26": {
      "title": "Dynamic Analysis",
      "analogy": "Dynamic analysis is like observing children playing to understand their game. Just as we need to watch them in action to grasp how they play, dynamic analysis involves examining a program's behavior during execution to fully comprehend its workings.",
      "starter_code": "print(\"Hello, World!\")",
      "content": "1. Dynamic analysis observes the program's behavior during runtime. 2. It allows for the examination of the program's environment and state changes as it runs. 3. This method enables debugging by letting you see how the program flows and interacts in real-time.",
      "docs": "[NIST Definition](https://www.nist.gov/glossary) | [IBM Explanation](https://www.ibm.com)",
      "ide_mode": "python"
    },
    "27": {
      "title": "Deep-Dive Lesson on Continuous Deployment (CD)",
      "analogy": "Imagine you're building a house, and every time you make a small change to the blueprint (like adding a window or changing the color of the walls), you immediately build that change into your house. This is similar to Continuous Deployment in software development, where every code change is automatically tested and deployed to production without manual intervention.",
      "starter_code": "# Import necessary libraries\nimport time\n\ndef build_code():\n    print(\"Building the code...\")\n    time.sleep(1)\n    return \"Code built successfully\"\n\ndef test_code():\n    print(\"Testing the code...\")\n    time.sleep(1)\n    return \"Tests passed\"\n\ndef deploy_code():\n    print(\"Deploying to production...\")\n    time.sleep(1)\n    return \"Deployment successful\"\n\n# Continuous Deployment Pipeline\ndef continuous_deployment_pipeline():\n    build_status = build_code()\n    if build_status == \"Code built successfully\":\n        test_status = test_code()\n        if test_status == \"Tests passed\":\n            deployment_status = deploy_code()\n            print(deployment_status)\n        else:\n            print(\"Deployment failed due to tests not passing.\")\n    else:\n        print(\"Deployment failed due to code build failure.\")\n\n# Run the pipeline\ncontinuous_deployment_pipeline()",
      "content": "- **Automated Testing**: Continuous Deployment relies heavily on automated testing frameworks to ensure that every change is stable and meets quality standards before deployment.\n  \n- **Pipeline Orchestration**: A CI/CD pipeline orchestrates the build, test, and deploy stages automatically, ensuring that each step is completed successfully before moving to the next.\n\n- **Infrastructure as Code (IaC)**: Using IaC tools like Terraform or Ansible allows for consistent and repeatable infrastructure provisioning, which is crucial in a Continuous Deployment environment.",
      "docs": "1. [Continuous Deployment Best Practices](https://www.atlassian.com/devops/continuous-deployment)\n2. [Mastering Continuous Deployment](https://docs.gitlab.com/ee/ci/introduction/)",
      "ide_mode": "python"
    },
    "28": {
      "title": "Real-Time Monitoring in Cybersecurity",
      "analogy": "Real-time monitoring in cybersecurity is akin to a conductor in an orchestra, harmonizing the performance of various systems.",
      "starter_code": "def real_time_monitoring():\n    pass",
      "content": "- Essential for Detecting Incidents: Real-time monitoring is crucial for promptly identifying and responding to incidents. It ensures that issues are addressed as they arise.  - Identifying Patterns and Trends: By continuously observing data, real-time monitoring helps in recognizing recurring patterns and trends, enabling proactive measures.  - Reduces Time to Resolution: Immediate insights from real-time monitoring allow faster decision-making, leading to quicker resolutions of incidents.",
      "docs": "[Real-Time Monitoring in Cybersecurity](https://www.sans.org/white-papers/archives/real-time-monitoring-in-cybersecurity/)  [Incident Management and Real-Time Monitoring](https://resources.info\u4fdd\u5b89.com/incident-management-real-time-monitoring/)",
      "ide_mode": "python"
    },
    "29": {
      "title": "Introduction to JavaScript in Frontend Development",
      "analogy": "Building a toy car where HTML is the body, CSS is the paint, and JavaScript makes the car move.",
      "starter_code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>JavaScript Example</title>\n    <style>\n        #colorBox {\n            width: 200px;\n            height: 200px;\n            background-color: lightblue;\n        }\n    </style>\n</head>\n<body>\n\n<div id=\"colorBox\"></div>\n\n<script>\n    document.getElementById('colorBox').addEventListener('click', function() {\n        this.style.backgroundColor = 'lightcoral';\n    });\n</script>\n\n</body>\n</html>",
      "content": "1. **Dynamic Behavior**: JavaScript allows web pages to respond dynamically to user actions such as clicks, key presses, and mouse movements.\n2. **Event Handling**: It enables developers to handle events like `click`, `mouseover`, and `keydown` to create interactive experiences.\n3. **DOM Manipulation**: JavaScript can manipulate the Document Object Model (DOM) to change the content and structure of a webpage without needing to reload it.",
      "docs": "1. [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)\n2. [W3Schools - JavaScript Tutorial](https://www.w3schools.com/js/)",
      "ide_mode": "javascript"
    },
    "30": {
      "title": "Introduction to Frontend Development - JavaScript Core Concept #3",
      "analogy": "Building a house where HTML is like the bricks that make up the structure, CSS is like the paint and decorations that make it look pretty, but JavaScript is like the electricity that brings the house to life.",
      "starter_code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>JavaScript Example</title>\n    <style>\n        #message {\n            font-size: 24px;\n            color: blue;\n        }\n    </style>\n</head>\n<body>\n\n<h1>Welcome to the Interactive Page!</h1>\n<button id=\"changeTextButton\">Click me!</button>\n<p id=\"message\">This text will change when you click the button.</p>\n\n<script>\n    document.getElementById('changeTextButton').addEventListener('click', function() {\n        document.getElementById('message').textContent = 'The text has been changed!';\n    });\n</script>\n\n</body>\n</html>",
      "content": "1. **Event Handling**: JavaScript allows developers to handle events such as clicks, key presses, and form submissions. This enables interactive user experiences.\n2. **DOM Manipulation**: JavaScript can manipulate the Document Object Model (DOM), allowing for dynamic changes to web pages without needing to reload the page.\n3. **Asynchronous Programming**: JavaScript supports asynchronous programming through callbacks, promises, and async/await, enabling non-blocking operations and smoother user interfaces.",
      "docs": "1. [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)\n2. [ECMAScript 2022 Specification](https://tc39.es/ecma262/)",
      "ide_mode": "javascript"
    },
    "31": {
      "title": "Loops with Break and Continue",
      "analogy": "Real World Comparison - Imagine reading a book where flipping through pages is like looping, skipping a boring part is like continue, and finding an interesting section to read again immediately is like break.",
      "starter_code": "# Example using break and continue in a loop names = [\"Alice\", \"Bob\", \"Charlie\", \"David\"] for name in names: if name == \"Bob\": print(f\"Found {name}, skipping to the next.\") continue # Skip the rest of the loop for this iteration if name == \"David\": print(f\"Stopping at {name}.\") break # Exit the loop entirely print(name)",
      "content": "- **Break Statement**: The `break` statement is used to exit a loop prematurely when a certain condition is met. It completely terminates the loop and moves on to the next line of code following the loop. - **Continue Statement**: The `continue` statement, on the other hand, skips the current iteration of the loop but continues with the subsequent iterations. It does not terminate the entire loop; it simply bypasses the remaining part of the loop's body for that particular iteration. - **Control Flow**: Both `break` and `continue` provide control over the flow of loops, allowing developers to optimize their code by avoiding unnecessary iterations or handling specific conditions efficiently.",
      "docs": "1. [Python Official Documentation on Loops](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements) 2. [Real Python - Break and Continue in Python](https://realpython.com/python-break-continue-statement/)",
      "ide_mode": "python"
    },
    "32": {
      "title": "Introduction to Module 4: Incident Management and Response",
      "analogy": "Incident management is like managing traffic flow during peak hours.",
      "starter_code": "def handle_incident():\n    \"\"\"Simulates incident handling in a system.\"\"\"\n    incidents = [\"Server restart needed\", \"Memory low\", \"User query\"]\n    \n    for incident in incidents:\n        priority = {\"Server restart needed\": \"critical\",\n                    \"Memory low\": \"high\",\n                    \"User query\": \"medium\"}\n        print(f\"Handling: {incident} with priority: {priority[incident]}\")\n        \n    print(\"All incidents handled successfully.\")",
      "content": "- **Incident Management**: A structured approach to tracking, prioritizing, and resolving incidents.  \n- **Key Features**: Includes incident categorization, prioritization based on impact, and collaboration tools for efficient resolution.  \n- **Importance**: Ensures timely response to issues, enhancing system availability and user satisfaction.",
      "docs": "1. [Incident Management](https://en.wikipedia.org/wiki/ITIL)\n2. [ITIL Incident Management](https://www.gartner.com)",
      "ide_mode": "python"
    },
    "33": {
      "title": "\": \"Understanding JSON Formatting\",\n  \"",
      "analogy": "\": \"Just like how a recipe is organized in a structured way, JSON helps organize data neatly.\",\n  \"",
      "starter_code": "\": \"const obj = {name: 'John', age: 30};\",\n  \"",
      "content": "\": \"JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on JavaScript objects and provides a simple structure for data representation. JSON is widely used in web applications for transmitting data between servers and clients.\",\n  \"",
      "docs": "\": \"https://www.json.org/json\"\n}",
      "ide_mode": "python"
    }
  }
};
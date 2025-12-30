const SNAPSHOT_DATA = {
  "tree": {
    "C++ Game Engine Engineering": {
      "2": {
        "title": "M1: Introduction to C++ for Game Engine Development",
        "lessons": [
          {
            "id": 2,
            "title": "Introduction to Multithreading in C++ for Game Engine Development"
          }
        ]
      }
    },
    "Red Team Operations": {
      "1": {
        "title": "M1: Red Team Operations: Planning and Execution",
        "lessons": [
          {
            "id": 1,
            "title": "Introduction to Red Team Operations: Planning and Execution (Reverse Engineering with Ghidra)"
          }
        ]
      }
    }
  },
  "lessons": {
    "1": {
      "title": "Introduction to Red Team Operations: Planning and Execution (Reverse Engineering with Ghidra)",
      "analogy": "Imagine you are a detective trying to solve a complex puzzle. The software being analyzed is like a locked safe, and Ghidra is your set of tools that helps you open it. Just as a detective would examine fingerprints, tool marks, and other clues to understand the crime scene, a reverse engineer uses Ghidra to analyze binary code, disassemble programs, and identify vulnerabilities.",
      "starter_code": "# Import necessary modules from Ghidra's API from ghidra.app.decompiler import DecompInterface from ghidra.program.flatapi import FlatProgramAPI def decompile_function(program, address): # Initialize the decompiler interface decomp = DecompInterface() if not decomp.openProgram(program): print(\"Decompiler failed to open program\") return # Get the function at the specified address func = program.getFunctionAt(address) if func is None: print(f\"No function found at address {address}\") return # Decompile the function decomp_result = decomp.decompileFunction(func, 60, monitor=None) if decomp_result.decompiled: print(decomp_result.getDecompiledFunction().getC()) else: print(\"Failed to decompile function\") # Example usage if __name__ == \"__main__\": # Assuming 'currentProgram' is the Ghidra program object current_program = FlatProgramAPI(currentProgram) address = 0x00401000 # Example address of a function in the binary decompile_function(current_program.getProgram(), address)",
      "content": "- **Binary Analysis**: Ghidra provides comprehensive tools for analyzing binary files, including disassembly, decompilation, and data flow analysis. - **Scripting Capabilities**: Ghidra supports scripting in Java and Python, allowing users to automate repetitive tasks and create custom analysis tools. - **Cross-Platform Support**: Ghidra is compatible with multiple operating systems, making it versatile for various environments.",
      "docs": "[Ghidra Official Documentation](https://ghidra-sre.org/), [NSA's Ghidra GitHub Repository](https://github.com/NationalSecurityAgency/ghidra)",
      "ide_mode": "python"
    },
    "2": {
      "title": "Introduction to Multithreading in C++ for Game Engine Development",
      "analogy": "Imagine you're building a complex game engine. The engine needs to handle multiple tasks simultaneously, such as rendering graphics, processing user input, and updating physics calculations. Just like how a busy kitchen has multiple chefs working on different dishes at the same time, your game engine uses multithreading to perform these tasks concurrently.",
      "starter_code": "#include <iostream>\n#include <thread>\n#include <mutex>\n\nstd::mutex mtx; // Mutex for synchronizing access to shared resources\n\nvoid print_even(int n) {\n    for (int i = 0; i <= n; i += 2) {\n        std::lock_guard<std::mutex> lock(mtx); // Lock the mutex\n        std::cout << \"Even: \" << i << std::endl;\n    }\n}\n\nvoid print_odd(int n) {\n    for (int i = 1; i <= n; i += 2) {\n        std::lock_guard<std::mutex> lock(mtx); // Lock the mutex\n        std::cout << \"Odd: \" << i << std::endl;\n    }\n}\n\nint main() {\n    int n = 10;\n\n    std::thread t1(print_even, n);\n    std::thread t2(print_odd, n);\n\n    t1.join(); // Wait for thread t1 to finish\n    t2.join(); // Wait for thread t2 to finish\n\n    return 0;\n}",
      "content": "1. **Thread Creation and Management**:\n   - `std::thread` is used to create new threads in C++. Each thread can execute a different function concurrently.\n   - The `join()` method ensures that the main thread waits for the spawned threads to complete before exiting.\n\n2. **Mutexes for Synchronization**:\n   - Mutexes (mutual exclusion) are crucial for preventing race conditions when multiple threads access shared resources simultaneously.\n   - `std::mutex` provides a simple mechanism to lock and unlock, ensuring that only one thread can execute a critical section of code at a time.\n\n3. **Thread Safety Considerations**:\n   - Proper use of mutexes is essential to maintain data integrity in multithreaded applications.\n   - Avoid deadlocks by always acquiring locks in the same order and releasing them promptly.",
      "docs": "1. [C++ std::thread Documentation](https://en.cppreference.com/w/cpp/thread/thread)\n2. [C++ Mutex Documentation](https://en.cppreference.com/w/cpp/thread/mutex)",
      "ide_mode": "python"
    }
  }
};
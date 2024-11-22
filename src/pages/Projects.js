import React, { useRef } from 'react';
import '../css/Project.css';
import { motion, useInView } from 'framer-motion';


const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const inView1 = useInView(ref1, { threshold: 0 });
  const inView2 = useInView(ref2, { threshold: 0 });
  const inView3 = useInView(ref3, { threshold: 0 });
  const inView4 = useInView(ref4, { threshold: 0 });
  const inView5 = useInView(ref5, { threshold: 0 });

  return (
    <div className='projectsContainer'>
      <div className='projects'>
        <div className='leftColumn'>
          <motion.div
            className='project project1'
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className='projectTitle'>Project 1</div>
          </motion.div>

          <motion.div
            className='project project2'
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className='projectTitle'>Project 2</div>
          </motion.div>

          <motion.div
            className='project project3'
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className='projectTitle'>Project 3</div>
          </motion.div>
        </div>
        <div className='rightColumn'>
          <motion.div
            className='project project4'
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className='projectTitle'>Project 4</div>
          </motion.div>

          <motion.div
            className='project project5'
            ref={ref5}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className='projectTitle'>Project 5</div>
          </motion.div>
        </div>

        <div className='codeSnippet1'>
          <pre>
            <code>
              {`function greetUser(name) {
  if (name === 'An') {
    return 'Hello, An!';
  }
  return 'Hello stranger!';
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}`}
            </code>
          </pre>
        </div>
        <div className='codeSnippet2'>
          <pre>
            <code>
              {`
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}`}
            </code>
          </pre>
        </div>
        <div className='codeSnippet3'>
        <pre>
            <code>
              {`
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Projects;
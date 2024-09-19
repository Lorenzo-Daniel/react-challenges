export const files = {
  name: 'root',
  isFolder: true,
  children: [
    {
      name: 'src',
      isFolder: true,
      children: [
        {
          name: 'App.js',
          isFolder: false,
        },
        {
          name: 'Folder.js',
          isFolder: false,
        },
        {
          name: 'data.js',
          isFolder: false,
        },
        {
          name: 'Index.js',
          isFolder: false,
        },
        {
          name: 'styles.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'public',
      isFolder: true,
      children: [
        {
          name: 'index.html',
          isFolder: false,
        },
        {
          name: 'styles.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
    },
  ],
};

export const filesCode = [
  {
    name: 'App.js',
    code: `import { useEffect, useState } from 'react';
    import './App.css';
    import FolderStructure from './FolderStructure';
    import { files } from './data';
    import { filesCode } from './data';
    
    import { javascript } from '@codemirror/lang-javascript';
    import CodeMirror from '@uiw/react-codemirror';
    
    function App() {
      const [fileName, setFileName] = useState('');
      const [currentCode, setCurrentCode] = useState('Fake VSC');
    
      useEffect(() => {
        const findCode = filesCode.find((item) => item.name === fileName);
        if (findCode) {
          setCurrentCode(findCode.code);
        } else {
          return;
        }
      }, [fileName, currentCode]);
    
      return (
        <div className="flex">
          <FolderStructure files={files} setFileName={setFileName} />
          <div className=" flex-1">
            <CodeMirror
              value={currentCode?.toString()}
              height="100vh"
              extensions={[javascript({ jsx: true })]}
              editable={true}
              theme={'dark'}
              // onChange={onChange}
            />
          </div>
        </div>
      );
    }
    
    export default App;
    `,
  },

  {
    name: 'Folder.js',
    code: `import React, { Fragment, useState } from 'react';
    import Icon from './Icon';
    
    const Folder = ({ folder, setFileName }) => {
      const [isOpen, setIsOpen] = useState(!false);
    
      const toggleFolder = () => {
        setIsOpen(!isOpen);
      };
    
      const handleFileName = (name) => {
        setFileName(name);
      };
    
      const verifyExtension = (fileName) => {
        if (fileName.endsWith('.json')) {
          return 'json';
        } else if (fileName.endsWith('.js')) {
          return 'js';
        } else if (fileName.endsWith('.css')) {
          return 'css';
        } else if (fileName.endsWith('.html')) {
          return 'html';
        } else {
          if (isOpen) {
            return 'caretDown';
          } else {
            return 'caretRight';
          }
        }
      };
      return (
        <div className="ms-3 ">
          {folder.isFolder ? (
            <div
              className="flex hover:bg-[#181514] p-1 rounded cursor-pointer"
              onClick={() => toggleFolder(!isOpen)}
            >
              {!isOpen ? (
                <div className="flex ">
                  <Icon name="caretRight" width="15" className="mr-1" />
                  <Icon name="closedFolder" width="15" />
                </div>
              ) : (
                <div className="flex  ">
                  <Icon name="caretDown" width="15" className="mr-1" />
                  <Icon name="openFolder" width="15" className="" />
                </div>
              )}
              <span className="ms-1">{folder.name} </span>
            </div>
          ) : (
            <div
              className="flex hover:bg-[#181514] px-2  rounded cursor-pointer ms-4"
              onClick={() => handleFileName(folder.name)}
            >
              <Icon name={verifyExtension(folder.name)} width="15" className="" />
              <span className="ml-1">{folder.name} </span>
            </div>
          )}
    
          {folder.isFolder &&
            isOpen &&
            folder.children.map((child, i) => {
              return (
                <Fragment key={i}>
                  <Folder folder={child} setFileName={setFileName} />
                </Fragment>
              );
            })}
        </div>
      );
    };
    
    const FolderStructure = ({ files, setFileName }) => {
      return (
        <div className="bg-[#211f23] p-2 text-white text-sm w-64 min-w-60 h-dvh font-thin  flex ">
          <Folder folder={files} setFileName={setFileName} />
        </div>
      );
    };
    
    export default FolderStructure;
    `,
  },
  {
    name: 'data.js',
    code: `
    export const files = {
      name: 'root',
      isFolder: true,
      children: [
        {
          name: 'src',
          isFolder: true,
          children: [
            {
              name: 'App.js',
              isFolder: false,
            },
            {
              name: 'Folder.js',
              isFolder: false,
            },
            {
              name: 'data.js',
              isFolder: false,
            },
            {
              name: 'Index.js',
              isFolder: false,
            },
            {
              name: 'styles.css',
              isFolder: false,
            },
          ],
        },
        {
          name: 'public',
          isFolder: true,
          children: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'styles.css',
              isFolder: false,
            },
          ],
        },
        {
          name: 'package.json',
          isFolder: false,
        },
      ],
    };
    `,
  },
  {
    name: 'Index.js',
    code: `
    import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);

    `,
  },
  {
    name: 'styles.css',
    code: `
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    `,
  },
  {
    name: 'index.html',
    code: `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Vite + React + TS</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
    
    `,
  },
  {
    name: 'package.json',
    code: `
    {
      "name": "vite-react-typescript-starter",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "tsc -b && vite build",
        "lint": "eslint .",
        "preview": "vite preview"
      },
      "dependencies": {
        "@codemirror/lang-javascript": "^6.2.2",
        "@uiw/react-codemirror": "^4.23.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1"
      },
      "devDependencies": {
        "@eslint/js": "^9.9.1",
        "@types/react": "^18.3.4",
        "@types/react-dom": "^18.3.0",
        "@vitejs/plugin-react": "^4.3.1",
        "eslint": "^9.9.1",
        "eslint-plugin-react-hooks": "^5.1.0-rc.0",
        "eslint-plugin-react-refresh": "^0.4.11",
        "globals": "^15.9.0",
        "typescript": "^5.5.3",
        "typescript-eslint": "^8.3.0",
        "vite": "^5.4.2"
      }
    }
    
    `,
  },
  {
    name: 'App.js',
    code: `
    `,
  },
];

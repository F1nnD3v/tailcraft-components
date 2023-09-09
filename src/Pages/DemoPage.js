import React, { useState } from "react";
import {
  Button,
  Loading,
  Accordion,
  Alert,
  Avatar,
  Breadcrumb,
  Card,
  Checkbox,
  Dropdown,
  Input,
  Modal,
  ProgressBar,
  Radio,
  Table,
  Textarea,
  Tooltip,
  Switch,
  Tabs,
} from "../utils/component_exporter";

function DemoPage() {
  // States for different components
  const [showModal, setShowModal] = useState(false);
  // ... other states for different components

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-xl">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Components Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Button Component */}
        <section id="button" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Button</h2>
          <Button
            onClick={() =>{
              alert("working!")
              console.log("Working!")
            }}
          >
            Click Me
          </Button>
          {/* ... other variations */}
        </section>

        {/* Loading Component */}
        <section id="loading" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Loading</h2>
          <Loading />
        </section>

        {/* Accordion Component */}
        <section id="accordion" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Accordion</h2>
          <Accordion title="Accordion Title">
            Content inside the accordion.
          </Accordion>
        </section>

        {/* Alert Component */}
        <section id="alert" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Alert</h2>
          <Alert message="This is an alert!" type="info" />
        </section>

        {/* Avatar Component */}
        <section id="avatar" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Avatar</h2>
          <Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />
        </section>

        {/* Breadcrumb Component */}
        <section id="breadcrumb" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Breadcrumb</h2>
          <Breadcrumb
            links={[
              { label: "Home", href: "/" },
              { label: "Profile", href: "/profile" },
            ]}
          />
        </section>

        {/* Card Component */}
        <section id="card" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Card</h2>
          <Card title="Card Title" content="Card content goes here." />
        </section>

        {/* Checkbox Component */}
        <section id="checkbox" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Checkbox</h2>
          <Checkbox label="Check me" />
        </section>

        {/* Dropdown Component */}
        <section id="dropdown" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Dropdown</h2>
          <Dropdown
            label={"a"}
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </section>

        {/* Input Component */}
        <section id="input" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Input</h2>
          <Input placeholder="Enter text here" />
        </section>

        {/* ProgressBar Component */}
        <section id="progressBar" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Progress Bar</h2>
          <ProgressBar progress={50} />
        </section>

        {/* Radio Component */}
        <section id="radio" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Radio</h2>
          <Radio
            name="options"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </section>

        {/* Table Component */}
        <section id="table" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Table</h2>
          <Table
            headers={["Header 1", "Header 2"]}
            rows={[["Row 1", "Row 2"]]}
          />
        </section>

        {/* Textarea Component */}
        <section id="textarea" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Textarea</h2>
          <Textarea placeholder="Enter multiline text here" />
        </section>

        {/* Tooltip Component */}
        <section id="tooltip" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Tooltip</h2>
          <Tooltip content="Tooltip content goes here">Hover me</Tooltip>
        </section>

        {/* Tabs Component */}
        <section id="tabs" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Tabs</h2>
          <Tabs
            tabs={["Tab 1", "Tab 2"]}
            content={["Content 1", "Content 2"]}
          />
        </section>

        {/* Modal Component */}
        <section id="modal" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Modal</h2>
          <Button onClick={() => setShowModal(true)}>Open Modal</Button>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title="Demo Modal"
          >
            This is a demo modal. You can close it by clicking the "X" button.
          </Modal>
        </section>
        {/* Switch Component */}
        <section id="modal" className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Switch</h2>
          <Switch />
        </section>
      </div>
    </div>
  );
}

export default DemoPage;

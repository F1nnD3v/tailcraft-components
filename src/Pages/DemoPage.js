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
  Tabs,
} from "../utils/component_exporter";

function DemoPage() {
  // States for different components
  const [showModal, setShowModal] = useState(false);
  // ... other states for different components

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Components Showcase</h1>

      {/* Button Component */}
      <section id="button">
        <h2 className="text-2xl font-semibold mb-2">Button</h2>
        <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
        {/* ... other variations */}
      </section>

      {/* Loading Component */}
      <section id="loading">
        <h2 className="text-2xl font-semibold mb-2">Loading</h2>
        <Loading />
      </section>

      {/* Accordion Component */}
      <section id="accordion">
        <h2 className="text-2xl font-semibold mb-2">Accordion</h2>
        <Accordion title="Accordion Title">
          Content inside the accordion.
        </Accordion>
      </section>

      {/* Alert Component */}
      <section id="alert">
        <h2 className="text-2xl font-semibold mb-2">Alert</h2>
        <Alert message="This is an alert!" type="info" />
      </section>

      {/* Avatar Component */}
      <section id="avatar">
        <h2 className="text-2xl font-semibold mb-2">Avatar</h2>
        <Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />
      </section>

      {/* Breadcrumb Component */}
      <section id="breadcrumb">
        <h2 className="text-2xl font-semibold mb-2">Breadcrumb</h2>
        <Breadcrumb
          links={[
            { label: "Home", href: "/" },
            { label: "Profile", href: "/profile" },
          ]}
        />
      </section>

      {/* Card Component */}
      <section id="card">
        <h2 className="text-2xl font-semibold mb-2">Card</h2>
        <Card title="Card Title" content="Card content goes here." />
      </section>

      {/* Checkbox Component */}
      <section id="checkbox">
        <h2 className="text-2xl font-semibold mb-2">Checkbox</h2>
        <Checkbox label="Check me" />
      </section>

      {/* Dropdown Component */}
      <section id="dropdown">
        <h2 className="text-2xl font-semibold mb-2">Dropdown</h2>
        <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
      </section>

      {/* Input Component */}
      <section id="input">
        <h2 className="text-2xl font-semibold mb-2">Input</h2>
        <Input placeholder="Enter text here" />
      </section>

      {/* ProgressBar Component */}
      <section id="progressBar">
        <h2 className="text-2xl font-semibold mb-2">Progress Bar</h2>
        <ProgressBar progress={50} />
      </section>

      {/* Radio Component */}
      <section id="radio">
        <h2 className="text-2xl font-semibold mb-2">Radio</h2>
        <Radio name="options" options={["Option 1", "Option 2", "Option 3"]} />
      </section>

      {/* Table Component */}
      <section id="table">
        <h2 className="text-2xl font-semibold mb-2">Table</h2>
        <Table headers={["Header 1", "Header 2"]} rows={[["Row 1", "Row 2"]]} />
      </section>

      {/* Textarea Component */}
      <section id="textarea">
        <h2 className="text-2xl font-semibold mb-2">Textarea</h2>
        <Textarea placeholder="Enter multiline text here" />
      </section>

      {/* Tooltip Component */}
      <section id="tooltip">
        <h2 className="text-2xl font-semibold mb-2">Tooltip</h2>
        <Tooltip content="Tooltip content goes here">Hover me</Tooltip>
      </section>

      {/* Tabs Component */}
      <section id="tabs">
        <h2 className="text-2xl font-semibold mb-2">Tabs</h2>
        <Tabs tabs={["Tab 1", "Tab 2"]} content={["Content 1", "Content 2"]} />
      </section>

      {/* Modal Component */}
      <section id="modal">
        <h2 className="text-2xl font-semibold mb-2">Modal</h2>
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Demo Modal"
        >
          This is a demo modal. You can close it by clicking the "X" button.
        </Modal>
      </section>
    </div>
  );
}

export default DemoPage;

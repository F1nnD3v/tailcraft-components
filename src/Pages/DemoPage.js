import React, { useState } from 'react';
import { Button, Loading, Accordion, Alert, Avatar, Breadcrumb, Card, Checkbox, Dropdown, Input, Modal, ProgressBar, Radio, Table, Textarea, Tooltip, Tabs } from '../utils/component_exporter';

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
        <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
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
        <Breadcrumb links={[{ label: 'Home', href: '/' }, { label: 'Profile', href: '/profile' }]} />
      </section>

      {/* And so on for other components ... */}

      {/* Modal Component */}
      <section id="modal">
        <h2 className="text-2xl font-semibold mb-2">Modal</h2>
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Demo Modal">
          This is a demo modal. You can close it by clicking the "X" button.
        </Modal>
      </section>
    </div>
  );
}

export default DemoPage;

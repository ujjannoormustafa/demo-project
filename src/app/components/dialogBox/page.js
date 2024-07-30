"use client"
import React from "react";
import { useState } from "react";
import { Button, Modal } from 'antd';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Week
            </Button>
            <Modal title="Select Week" open={isModalOpen} centered onOk={handleOk} onCancel={handleCancel}>
                <div className="flex justify-around my-4 py-4 items-center space-4">
                    <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded p-1 lg:px-6 py-2">week 1</div>
                    <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded p-1 lg:px-6 py-2">week 2</div>
                    <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded p-1 lg:px-6 py-2">week 3</div>
                    <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded p-1 lg:px-6 py-2">week 4</div>
                </div>
            </Modal>
        </>
    );
}

export default Page;

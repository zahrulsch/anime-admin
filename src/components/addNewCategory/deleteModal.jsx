import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, Button } from '@chakra-ui/react'
export default function DeleteModal({ isOpen, onClose, selectToDelete }) {
  return (
    <Modal trapFocus={false} size='md' isCentered motionPreset='scale' closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color='red.500'>
          Delete confirm!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure to delete <b>'{selectToDelete}'</b> from categories?</Text>
        </ModalBody>
        <ModalFooter>
          <Button size='sm' mr={2} colorScheme='red'>Delete</Button>
          <Button size='sm' onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
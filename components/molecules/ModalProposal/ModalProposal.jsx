import styles from './ModalProposal.module.scss'
import { CloseModal, P } from '@/components/atoms';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModalProposal } from '../../../actions/general';
import ReactMarkdown from 'react-markdown';

const ModalProposal = () => {
  const { isOpenModalProposal, modalProposalId } = useSelector(state => state.general)
  const { countries } = useSelector(state => state.country)
  const areThereCountries = countries.length !== 0;
  const country = countries.find(({id}) => id === modalProposalId)
  const dispatch = useDispatch()
  const isThereContent = country?.attributes.resultProposal && country?.attributes.contentProposal

  const closeModal = () => {
    dispatch(setOpenModalProposal())
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      overflowY: 'scroll !important',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#__next');
  
  return (
    <Modal
      isOpen={isOpenModalProposal}
      onRequestClose={closeModal}
      style={customStyles}
      className='modal-proposal'
      // className={`modal-proposal ${styles['modal-proposal']} ${isOpenModalProposal ? styles['open-modal'] : ''}`}
      contentLabel="Example Modal"
    >
      {areThereCountries &&
        <>
          <CloseModal onClick={closeModal} />

          <div className={`${styles['modal-heading']} ${!isThereContent ? styles['modal-heading--more-padding'] : null}`}>
            <p>{country?.attributes.name}</p>
          </div>

          {isThereContent ?
            <div className={styles['modal-content']}>
              {country?.attributes.contentProposal.map(({id, titleProposal, descriptionProposal}) => {
                return (
                  <div key={id} className={styles['proposal-content']}>
                    <P color='secondary' className={styles['proposal-title']}>{titleProposal}</P>
                    <P color='secondary' className={styles['proposal-description']}>{descriptionProposal}</P>
                  </div>
                )
              })}

              {country?.attributes.resultProposal ?
                <div className={styles['result-content']}>
                  <P className={styles['result-title']}>RESULTADO</P>
                  <P as="div" className={styles['result-text']}>
                    <ReactMarkdown>
                      {country?.attributes.resultProposal}
                    </ReactMarkdown>
                  </P>                   
                </div>
              : null}
            </div>
          : null}
        </>
      }
    </Modal>
  )
}

export default ModalProposal
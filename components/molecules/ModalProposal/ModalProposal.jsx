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

  const closeModal = () => {
    dispatch(setOpenModalProposal())
  }

  Modal.setAppElement('#__next');
  
  return (
    <Modal
      isOpen={isOpenModalProposal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      {areThereCountries &&
        <div className={styles['modal-proposal']}>
          <CloseModal onClick={closeModal} />

          <div className={styles['modal-heading']}>
            <p>{country?.attributes.name}</p>
          </div>

          <div className={styles['modal-content']}>
            {country && country?.attributes.contentProposal.map(({id, titleProposal, descriptionProposal}) => {
              return (
                <div key={id} className={styles['proposal-content']}>
                  <P color='secondary' className={styles['proposal-title']}>{titleProposal}</P>
                  <P color='secondary' className={styles['proposal-description']}>{descriptionProposal}</P>
                </div>
              )
            })}
            {country?.attributes.resultProposal &&
              <div className={styles['result-content']}>
                <P className={styles['result-title']}>RESULTADO</P>
                <P className={styles['result-text']}>
                  <ReactMarkdown>
                    {country?.attributes.resultProposal}
                  </ReactMarkdown>
                </P>                   
              </div>
            }
          </div>
        </div>
      }
    </Modal>
  )
}

export default ModalProposal
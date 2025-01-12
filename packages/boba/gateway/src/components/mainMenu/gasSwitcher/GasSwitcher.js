import React from 'react'
import { Box } from '@material-ui/system'
import { useSelector } from 'react-redux'
import * as S from './GasSwitcher.styles.js'

import { selectGas } from 'selectors/balanceSelector'
import { selectVerifierStatus } from 'selectors/verifierSelector'

import { Typography } from '@material-ui/core'

function GasSwitcher() {

  const gas = useSelector(selectGas)
  const savings = Number(gas.gasL1) / Number(gas.gasL2)

  const verifierStatus = useSelector(selectVerifierStatus)
  let healthStatus = 'health'

  if (Number(verifierStatus.matchedBlock) + 50 < gas.blockL2) {
    healthStatus = 'unhealth'
  }

  return (
    <S.WalletPickerContainer>
      <S.WalletPickerWrapper>
        <S.Menu>
          <S.NetWorkStyle>
            <S.Label variant="body2">
              Ethereum Gas<br/>
              Boba Gas<br/>
              Savings<br/>
              L1 Block<br/>
              L2 Block<br/>
              Verified Block
            </S.Label>
            <Box sx={{
              display: 'flex',
              margin: '10px 0 10px 10px',
              alignItems: 'center',
              gap: 2,
              position: 'relative',
            }}
            >
              <Typography
                variant="body2"
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textTransform: 'capitalize'}}
              >
                {gas.gasL1} Gwei<br/>
                {gas.gasL2} Gwei<br/>
                {savings.toFixed(0)}x<br/>
                {gas.blockL1}<br/>
                {gas.blockL2}<br/>
                {verifierStatus.matchedBlock} {`(${healthStatus})`}
              </Typography>
            </Box>
          </S.NetWorkStyle>
        </S.Menu>
      </S.WalletPickerWrapper>
    </S.WalletPickerContainer>
  )

}

export default GasSwitcher

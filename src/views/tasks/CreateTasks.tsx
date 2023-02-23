// ** React Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { FormControl } from '@mui/material'

const CreateCounter = () => {
  return (
    <Card>
      <CardHeader
        title='Crie uma Nova Tarefa'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Total 48.5% growth
            </Box>{' '}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <form method='POST' action='http://localhost:5000/api/user/auth' autoComplete='on'>
          <FormControl fullWidth sx={{ width: 1 }}>
            <TextField autoFocus fullWidth id='newProject' label='Ex: Consultoria' name='newProject' sx={{ marginBottom: 4, width: '75%' }} />

            <Button
              fullWidth
              size='medium'
              variant='contained'
              sx={{ marginBottom: 7, width: '25%' }}
              type='submit'
            >
              Criar
            </Button>

          </FormControl>

        </form>
      </CardContent>
    </Card>
  )
}

export default CreateCounter
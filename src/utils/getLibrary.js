import { ethers } from 'ethers'
export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider)
  return library
}
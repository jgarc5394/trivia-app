const useColor = () => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-orange-500', 'bg-purple-500']
  const getColor = (index) => colors[index % colors.length]
  return { getColor }
}

export default useColor
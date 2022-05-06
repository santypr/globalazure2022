using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace gabapi.Hubs
{
    public class WarHub: Hub
    {
        public async Task Attack(string tribe)
        {
            await Clients.All.SendAsync("attackReceived", tribe);
        }
    }
}

using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace gabapi.Hubs
{
    public class WarHub: Hub
    {
        public async Task Enlist(string tribe)
        {
            await Clients.All.SendAsync("enlistReceived", tribe);
        }
    }
}

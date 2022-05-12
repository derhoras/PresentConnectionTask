using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PresentConnectionTask
{
    public record PostDto(int UserId, int Id, string Title, string Body);
}

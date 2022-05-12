using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using PresentConnectionTask;

namespace PresentConnectionTask
{
    public class SystemProfile : Profile
    {
        public SystemProfile()
        {

            CreateMap<Post, PostDto>();
            CreateMap<CreatePostDto, Post>();

        }
    }
}
